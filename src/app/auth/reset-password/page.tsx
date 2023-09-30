"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import { ArrowLeft } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import TextInput from "../../../components/forms/text-input";
const forgotPasswordSchema = z.object({
  email: z.string().nonempty("Email is required").email({
    message: "Invalid email",
  }),
});

type IForgotPasswordProps = z.infer<typeof forgotPasswordSchema>;
function ForgotPassword() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordProps>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });
  const onSubmit: SubmitHandler<IForgotPasswordProps> = async (
    values: IForgotPasswordProps
  ) => {
    console.log(values);
    reset();
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2>Reset password</h2>
        <p className="font-semibold">
          Please provide your valid email address to reset your password
        </p>
        <Link
          as={NextLink}
          className="flex items-center gap-1 w-max"
          href="/auth/login"
        >
          <ArrowLeft size={20} />
          <span> Login</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <TextInput
          errors={errors}
          register={register}
          name="email"
          type="email"
        />

        <Button
          className="font-semibold"
          radius="sm"
          fullWidth
          color="primary"
          type="submit"
        >
          Send Request
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
