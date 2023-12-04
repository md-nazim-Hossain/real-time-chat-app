"use client";
import TextInput from "@components/forms/text-input";
import { faker } from "@faker-js/faker";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Button, Textarea } from "@nextui-org/react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { IUser } from "@type/index";
import { updateProfile } from "@utils/actions";
import { convertImageToBase64 } from "@utils/base64";
import { CaretLeft, Pen } from "phosphor-react";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
const profileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  about: z.string().optional(),
  avatar: z.string().optional(),
});

type IProfileProps = z.infer<typeof profileSchema>;
type Props = {
  data: IUser;
};
function ProfileLeftSidebar({ data }: Props) {
  const queryClient: QueryClient = useQueryClient();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    getValues,
  } = useForm<IProfileProps>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: data?.firstName,
      lastName: data?.lastName,
      about: data?.about,
      avatar: data?.avatar,
    },
  });
  const onSubmit: SubmitHandler<IProfileProps> = async (
    values: IProfileProps
  ) => {
    const res: IUser = await updateProfile(values);
    if (res._id) {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["getProfile", data?._id],
      });
    }
  };
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="w-[340px] h-full dark:bg-dark-light bg-light  shadow-sidebar">
      <div className="p-5">
        <div className="flex items-center gap-5 ">
          <Button
            size="lg"
            variant="light"
            isIconOnly
            aria-label={"Caret left"}
          >
            <CaretLeft size={32} />
          </Button>
          <h1>Profile</h1>
        </div>
      </div>

      <div className="w-full h-[calc(100vh_-_90px)] overflow-y-auto scroll pb-5">
        <div className="p-5">
          <div className="mx-auto flex w-[121px] h-[121px] justify-center mb-12 mt-6 relative">
            <Avatar
              alt="My Avatar"
              src={data?.avatar ?? getValues("avatar") ?? faker.image.avatar()}
              className="w-[121px] h-[121px] object-cover"
            />
            <div
              className="cursor-pointer bg-theme-light dark:bg-theme-dark z-20 flex justify-center items-center  w-6 h-6 rounded-full border absolute -translate-y-1/2 -bottom-3 right-3"
              onClick={() => {
                ref.current?.click();
              }}
            >
              <input
                onChange={(e) => {
                  if (e.target && e.target.files) {
                    const file: File = e.target.files[0];
                    convertImageToBase64(file, (base64) => {
                      if (base64) {
                        setValue("avatar", base64);
                        toast.success("Image uploaded successfully");
                      }
                    });
                  }
                }}
                ref={ref}
                type="file"
                multiple={true}
                accept="image/*"
                className="sr-only"
              />
              <Pen className="w-3 h-3" />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <TextInput
              errors={errors}
              register={register}
              name="firstName"
              placeholder="First Name"
            />
            <TextInput
              errors={errors}
              register={register}
              name="lastName"
              placeholder="Last Name"
            />
            <h5 className="text-[#7C7C7D]">
              This name is visible to your contacts
            </h5>
            <Textarea
              {...register("about")}
              radius="sm"
              isInvalid={errors["about"]?.message ? true : false}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Enter your description"
              errorMessage={errors["about"]?.message}
              className="max-w-xs"
              color={errors["about"] ? "danger" : "primary"}
            />
            <div className="flex justify-end">
              <Button
                disabled={!isDirty || isSubmitting}
                radius="sm"
                className="border-1 min-w-[100px] font-medium disabled:opacity-50"
                variant="bordered"
                type="submit"
                color="primary"
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeftSidebar;
