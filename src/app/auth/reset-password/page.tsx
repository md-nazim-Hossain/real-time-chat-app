"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@nextui-org/react";
import { IApiErrorResponse, IApiResponse } from "@type/index";
import axiosInstance from "@utils/axios";
import { cookie } from "@utils/cookie";
import { logger } from "@utils/logger";
import NextLink from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { config } from "src/config";
import * as z from "zod";
import PasswordInput from "../../../components/forms/password-input";
const newPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    passwordConfirm: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  })
  .refine((value) => value.password === value.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

type INewPasswordProps = z.infer<typeof newPasswordSchema>;
function NewPasswordForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<INewPasswordProps>({
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
    resolver: zodResolver(newPasswordSchema),
  });
  const router = useRouter();
  const token = useSearchParams().get("code");
  const onSubmit: SubmitHandler<INewPasswordProps> = async (
    values: INewPasswordProps
  ) => {
    try {
      const { data }: { data: IApiResponse<{ token: string }> } =
        await axiosInstance.post("/auth/reset-password", {
          password: values.password,
          token,
        });
      toast.success("Password Reset successfully");
      cookie.set(data.data!.token, config.cookiesExpireTime);
      reset();
      router.push("/tawk/chat");
    } catch (error: unknown) {
      logger.log(error);
      const err = (error as any)?.response?.data as IApiErrorResponse;
      toast.error(err.message ?? "Something went wrong");
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2>Set your New Password</h2>
        <p className="font-semibold space-x-1">
          <span>Bact to </span>
          <Link as={NextLink} className="hover:underline" href="/auth/login">
            Login
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <PasswordInput
          errors={errors}
          register={register}
          name="password"
          label="New Password"
        />
        <PasswordInput
          label="Confirm Password"
          errors={errors}
          register={register}
          name="passwordConfirm"
        />

        <Button
          className="font-semibold disabled:bg-opacity-50"
          radius="sm"
          fullWidth
          color="primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
    </div>
  );
}

export default NewPasswordForm;
