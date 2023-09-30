"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import PasswordInput from "../_components/password-input";
import TextInput from "../_components/text-input";
const signInSchema = z.object({
  email: z.string().nonempty("Email is required").email({
    message: "Invalid email",
  }),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

type ILoginProps = z.infer<typeof signInSchema>;
function LoginForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });
  const onSubmit: SubmitHandler<ILoginProps> = async (values: ILoginProps) => {
    console.log(values);
    reset();
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2>Login To Wetalk</h2>
        <p className="font-semibold space-x-1">
          <span>New User?</span>
          <Link as={NextLink} className="hover:underline" href="/auth/register">
            Create an account
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <TextInput
          errors={errors}
          register={register}
          name="email"
          type="email"
        />
        <PasswordInput errors={errors} register={register} name="password" />
        <div className="flex justify-end">
          <Link
            className="font-semibold text-sm hover:underline"
            as={NextLink}
            href="/auth/reset-password"
          >
            Forgotten Password
          </Link>
        </div>
        <Button
          className="font-semibold"
          radius="sm"
          fullWidth
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
