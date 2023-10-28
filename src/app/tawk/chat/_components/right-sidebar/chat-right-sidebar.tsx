"use client";

import { cn } from "@nextui-org/react";
import { useAppSelector } from "@redux/store";
import React from "react";

function ChatRightSidebar({ children }: { children: React.ReactNode }) {
  const { chatSidebar } = useAppSelector((state) => state.chatContactSlice);
  return (
    <div
      className={cn(
        "h-full dark:bg-dark-light bg-light ",
        chatSidebar.openChatContact ? "w-[340px] " : "w-0"
      )}
    >
      {children}
    </div>
  );
}

export default ChatRightSidebar;
