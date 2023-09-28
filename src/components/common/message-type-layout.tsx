import { cn } from "@nextui-org/react";
import React from "react";

function MessageTypeLayout({
  incoming,
  children,
  className,
  style,
}: {
  incoming: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn("flex ", incoming ? "justify-start" : "justify-end")}>
      <div
        style={style}
        className={cn(
          "w-max mb-4 p-3 rounded-xl",
          incoming ? "bg-white dark:bg-dark-light" : "bg-primary",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default MessageTypeLayout;
