"use client";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

function EmptyPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-theme-light dark:bg-theme-dark">
      <div className="space-y-5">
        <Image
          loading="lazy"
          as={NextImage}
          src={"/assets/images/empty-chat.svg"}
          width={287}
          height={287}
          alt="Empty Chat Icon"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <p className="text-black dark:text-white text-center font-bold">
          Select a conversation or start a{" "}
          <span className=" text-secondary">new one</span>
        </p>
      </div>
    </div>
  );
}

export default EmptyPage;
