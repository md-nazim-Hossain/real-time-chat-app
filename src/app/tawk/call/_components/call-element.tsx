"use client";
import { Avatar, Button, Link, cn } from "@nextui-org/react";
import { ICall } from "@type/index";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";

type Props = {
  call: ICall;
};
function CallElement({ call }: Props) {
  const pathname = usePathname();
  const currentChat = pathname === `/call/${call.id}`;
  return (
    <Link
      href={`/call/${call.id}`}
      as={NextLink}
      className={cn(
        "rounded-[15px] p-4 flex justify-between cursor-pointer",
        currentChat ? "bg-primary" : "dark:bg-theme-dark bg-theme-light"
      )}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative">
          <Avatar
            as={"button"}
            className="w-full h-full"
            alt={"My Avatar " + call.id}
            src={call.img}
          />
          <span
            className={cn(
              "z-10 border-2 border-white translate-y-1/2 absolute bottom-[4px] right-1 w-[12px] h-[12px] rounded-full  inline-block",
              call.online ? "bg-[#76D45E]" : "bg-dark-gray"
            )}
          ></span>
        </div>
        <div className="space-y-1.5">
          <p
            className={cn(
              "font-extrabold",
              currentChat ? "text-white " : "text-[#030303] dark:text-white"
            )}
          >
            {call.name}
          </p>
          <div className="flex items-center gap-4">
            {call.incoming ? (
              <ArrowDownLeft color={call.missed ? "red" : "green"} />
            ) : (
              <ArrowUpRight color={call.missed ? "red" : "green"} />
            )}
            <p
              className={cn(
                "text-sm font-semibold max-w-[180px] line-clamp-1",
                currentChat ? "text-white" : "text-[#7C7C7D]"
              )}
            >
              yesterday,12:40
            </p>
          </div>
        </div>
      </div>
      <Button
        variant="light"
        color="success"
        className="min-w-max px-3 py-0 hover:!bg-transparent"
        radius="sm"
      >
        {call.type === "video" ? (
          <VideoCamera size={20} />
        ) : (
          <Phone size={24} />
        )}
      </Button>
    </Link>
  );
}

export default CallElement;
