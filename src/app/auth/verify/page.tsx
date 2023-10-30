"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

import CodeForm from "@components/forms/code-form";
import { IApiErrorResponse, IApiResponse } from "@type/index";
import axiosInstance from "@utils/axios";
import { cookie } from "@utils/cookie";
import { logger } from "@utils/logger";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { config } from "src/config";
import { useSessionStorage } from "usehooks-ts";
const VerifySchema = z.object({
  code1: z.string().nonempty("Code is required"),
  code2: z.string().nonempty("Code is required"),
  code3: z.string().nonempty("Code is required"),
  code4: z.string().nonempty("Code is required"),
  code5: z.string().nonempty("Code is required"),
  code6: z.string().nonempty("Code is required"),
});

type IVerifyProps = z.infer<typeof VerifySchema>;
function Verify() {
  const methods = useForm<IVerifyProps>({
    mode: "onChange",
    defaultValues: {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
    },
    resolver: zodResolver(VerifySchema),
  });
  const [email] = useSessionStorage("email", "");
  const router = useRouter();
  const onSubmit: SubmitHandler<IVerifyProps> = async (
    values: IVerifyProps
  ) => {
    try {
      const otp = `${values.code1}${values.code2}${values.code3}${values.code4}${values.code5}${values.code6}`;
      const { data }: { data: IApiResponse<{ token: string }> } =
        await axiosInstance.post("/auth/verify-otp", { email, otp });
      toast.success(data.message!);
      methods.reset();
      cookie.set(data.data!.token, config.cookiesExpireTime);
      sessionStorage.removeItem("email");
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
        <h2>Please Verify OTP</h2>
        <p className="font-semibold space-x-1">Send to email {email}</p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
          <CodeForm
            keyName="code"
            inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}
          />
          <Button
            className="font-semibold disabled:bg-opacity-50"
            radius="sm"
            fullWidth
            color="primary"
            type="submit"
            disabled={methods.formState.isSubmitting}
          >
            {methods.formState.isSubmitting ? "Verifying..." : "Verify OTP"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default Verify;
