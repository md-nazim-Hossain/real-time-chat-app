"use client";

import ChatAvatar from "@app/(dashboard)/chat/_components/chat-avatar";
import { cn } from "@nextui-org/react";
import { IChatList } from "@type/index";

type Props = {
  chat: IChatList;
};
function UserChat({ chat }: Props) {
  const currentChat = false;
  return (
    <div
      className={cn(
        "rounded-[15px] p-4 flex justify-between cursor-pointer",
        currentChat ? "bg-primary" : "dark:bg-theme-dark bg-theme-light"
      )}
    >
      <ChatAvatar chat={chat} />
      <div className="space-y-1.5">
        <p
          className={cn(
            "font-xs font-medium",
            currentChat ? "text-white" : "text-dark-gray"
          )}
        >
          {chat.time}
        </p>
        <p className="bg-primary flex justify-center items-center w-4 h-4 rounded-full text-white font-bold text-[10px] ">
          <span>{chat.unread}</span>
        </p>
      </div>
    </div>
  );
}

export default UserChat;
