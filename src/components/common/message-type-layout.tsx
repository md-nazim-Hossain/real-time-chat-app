import { MessageOptions } from "@app/tawk/chat/_components/message-type";
import { cn } from "@nextui-org/react";
import React from "react";

function MessageTypeLayout({
  incoming,
  children,
  className,
  style,
  showMenu = true,
}: {
  incoming: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showMenu?: boolean;
}) {
  return (
    <div className={cn("flex ", incoming ? "justify-start" : "justify-end")}>
      <div
        style={style}
        className={cn(
          "w-max mb-4 p-3 rounded-xl",
          incoming ? "bg-white dark:bg-[#18191A]" : "bg-primary",
          className
        )}
      >
        {children}
      </div>
      {showMenu && <MessageOptions />}
    </div>
  );
}

export default MessageTypeLayout;
