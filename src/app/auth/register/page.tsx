"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@nextui-org/react";
import { IApiErrorResponse, IApiResponse } from "@type/index";
import axiosInstance from "@utils/axios";
import { logger } from "@utils/logger";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSessionStorage } from "usehooks-ts";
import * as z from "zod";
import PasswordInput from "../../../components/forms/password-input";
import TextInput from "../../../components/forms/text-input";
const registerSchema = z
  .object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
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
    formState: { errors, isSubmitting },
  } = useForm<IRegisterProps>({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      firstName: "",
      lastName: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const [_, setEmail] = useSessionStorage("email", "");

  const router = useRouter();
  const onSubmit: SubmitHandler<IRegisterProps> = async (
    values: IRegisterProps
  ) => {
    try {
      const { data }: { data: IApiResponse<{ token: string; id: string }> } =
        await axiosInstance.post("/auth/register", { ...values });
      toast.success(data.message!);
      logger.log(data);
      reset();
      setEmail(values.email);
      localStorage.setItem("userId", data.data!?.id);
      router.push("/auth/verify");
    } catch (error: unknown) {
      logger.log(error);
      const err = (error as any)?.response?.data as IApiErrorResponse;
      toast.error(err.message ?? "Something went wrong");
    }
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2>Register a tawk account</h2>
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
            name="firstName"
            label="First Name"
          />
          <TextInput
            errors={errors}
            register={register}
            name="lastName"
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
          className="font-semibold disabled:bg-opacity-50"
          radius="sm"
          fullWidth
          color="primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
