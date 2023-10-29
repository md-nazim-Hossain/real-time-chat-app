"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@nextui-org/react";
import { IApiErrorResponse, IApiResponse } from "@type/index";
import axios from "@utils/axios";
import { logger } from "@utils/logger";
import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";
import PasswordInput from "../../../components/forms/password-input";
import TextInput from "../../../components/forms/text-input";

import { cookie } from "@utils/cookie";
import { useRouter } from "next/navigation";
import { config } from "src/config";

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
    formState: { errors, isSubmitting },
  } = useForm<ILoginProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const router = useRouter();
  const onSubmit: SubmitHandler<ILoginProps> = async (values: ILoginProps) => {
    try {
      const { data }: { data: IApiResponse<{ token: string }> } =
        await axios.post("/auth/login", { ...values });
      toast.success(data.message!);
      reset();
      cookie.set(data.data!.token, config.cookiesExpireTime);
      router.push("/tawk/chat");
    } catch (error: unknown) {
      logger.log(error);
      const err = (error as any)?.response?.data as IApiErrorResponse;
      toast.error(err.message ?? "Something went wrong");
    }
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
          label="Email"
        />
        <PasswordInput errors={errors} register={register} name="password" />
        <div className="flex justify-end">
          <Link
            className="font-semibold text-sm hover:underline"
            as={NextLink}
            href="/auth/forgot-password"
          >
            Forgotten Password
          </Link>
        </div>
        <Button
          className="font-semibold disabled:bg-opacity-50"
          radius="sm"
          fullWidth
          color="primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Login"}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
