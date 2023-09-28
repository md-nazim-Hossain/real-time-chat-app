"use client";

import { cn } from "@nextui-org/react";
import { useAppSelector } from "@redux/store";

function Contact() {
  const { chatSidebar } = useAppSelector((state) => state.chatContactSlice);
  return (
    <div
      className={cn(
        "h-full",
        chatSidebar.openChatContact ? "w-[300px] " : "w-0"
      )}
    >
      C
    </div>
  );
}

export default Contact;
