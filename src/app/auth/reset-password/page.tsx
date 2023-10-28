"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import PasswordInput from "../../../components/forms/password-input";
const newPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    confirm_password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  })
  .refine((value) => value.password === value.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type INewPasswordProps = z.infer<typeof newPasswordSchema>;
function NewPasswordForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewPasswordProps>({
    defaultValues: {
      password: "",
      confirm_password: "",
    },
    resolver: zodResolver(newPasswordSchema),
  });
  const onSubmit: SubmitHandler<INewPasswordProps> = async (
    values: INewPasswordProps
  ) => {
    console.log(values);
    reset();
  };

  const router = useRouter();

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
          name="confirm_password"
        />

        <Button
          className="font-semibold"
          radius="sm"
          fullWidth
          color="primary"
          type="submit"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
}

export default NewPasswordForm;
