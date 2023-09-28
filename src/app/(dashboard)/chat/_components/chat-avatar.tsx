"use client";

import { Avatar, cn } from "@nextui-org/react";
import { IChatList } from "@type/index";

type Props = {
  chat: IChatList;
  currentChat?: boolean;
  isChat?: boolean;
};
function ChatAvatar({ chat, currentChat = false, isChat = false }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 relative">
        <Avatar
          className="w-full h-full"
          alt={"My Avatar " + chat.id}
          src={chat.img}
        />
        <span
          className={cn(
            "z-10 border-2 border-white translate-y-1/2 absolute bottom-[4px] right-1 w-[12px] h-[12px] rounded-full  inline-block",
            chat.online ? "bg-[#76D45E]" : "bg-dark-gray"
          )}
        ></span>
      </div>
      <div>
        <p
          className={cn(
            "font-extrabold",
            currentChat ? "text-white " : "text-[#030303] dark:text-white"
          )}
        >
          Nazim
        </p>
        <p
          className={cn(
            "text-sm font-semibold max-w-[180px] line-clamp-1",
            currentChat
              ? "text-white"
              : isChat
              ? "text-deep-gray"
              : "text-[#7C7C7D]"
          )}
        >
          {isChat ? "Online" : "Hello world..."}
        </p>
      </div>
    </div>
  );
}

export default ChatAvatar;
