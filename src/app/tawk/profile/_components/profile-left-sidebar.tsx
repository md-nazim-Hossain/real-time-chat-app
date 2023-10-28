"use client";
import TextInput from "@components/forms/text-input";
import { faker } from "@faker-js/faker";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Button, Textarea } from "@nextui-org/react";
import { convertImageToBase64 } from "@utils/base64";
import { CaretLeft, Pen } from "phosphor-react";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
const profileSchema = z.object({
  name: z.string().optional(),
  about: z.string().optional(),
  avatarUrl: z.string().optional(),
});

type IProfileProps = z.infer<typeof profileSchema>;
function ProfileLeftSidebar() {
  const {
    setValue,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<IProfileProps>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      about: "",
      avatarUrl: "",
    },
  });
  const onSubmit: SubmitHandler<IProfileProps> = async (
    values: IProfileProps
  ) => {
    console.log(values);
    reset();
  };
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="relative w-[340px] h-full dark:bg-dark-light bg-light  shadow-sidebar">
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

      <div className="w-full max-h-[calc(100vh_-_192px)] overflow-y-auto scroll pb-5">
        <div className="p-5 ">
          <div className="mx-auto flex w-[121px] h-[121px] justify-center mb-12 mt-6 relative">
            <Avatar
              alt="My Avatar"
              src={faker.image.avatar()}
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
                        setValue("avatarUrl", base64);
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
              name="name"
              placeholder="Name"
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
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeftSidebar;
