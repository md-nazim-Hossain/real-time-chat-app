"use client";

import { AuthTheme } from "@components/theme/theme";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen py-5 gap-5">
      <Image
        as={NextImage}
        src="/assets/images/logo.ico"
        width={120}
        height={120}
        alt="Logo"
      />
      <div className="px-3 sm:px-0 w-full max-w-md">{children}</div>
      <AuthTheme />
    </div>
  );
}

export default AuthLayout;
