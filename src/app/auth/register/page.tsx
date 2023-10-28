"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import PasswordInput from "../../../components/forms/password-input";
import TextInput from "../../../components/forms/text-input";
const registerSchema = z
  .object({
    first_name: z.string().nonempty("First name is required"),
    last_name: z.string().nonempty("Last name is required"),
    email: z.string().nonempty("Email is required").email({
      message: "Invalid email",
    }),
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

type IRegisterProps = z.infer<typeof registerSchema>;
function RegisterForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProps>({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<IRegisterProps> = async (
    values: IRegisterProps
  ) => {
    console.log(values);
    reset();
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2>Register Wetalk account</h2>
        <p className="font-semibold space-x-1">
          <span>Already have an account?</span>
          <Link as={NextLink} className="hover:underline" href="/auth/login">
            Login
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TextInput
            errors={errors}
            register={register}
            name="first_name"
            label="First Name"
          />
          <TextInput
            errors={errors}
            register={register}
            name="last_name"
            label="Last Name"
          />
        </div>
        <TextInput
          errors={errors}
          register={register}
          name="email"
          type="email"
          label="Email"
        />
        <PasswordInput errors={errors} register={register} name="password" />
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
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
