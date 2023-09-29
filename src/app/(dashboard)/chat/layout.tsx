"use client";

import React from "react";
import Chat from "./_components/chat";

function ChatPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      <Chat />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default ChatPageLayout;
