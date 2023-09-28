"use client";

import React from "react";
import Chat from "./_components/chat";
import ChatFooter from "./_components/chat-footer";
import ChatNavbar from "./_components/chat-navbar";

function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      <Chat />
      <div className="flex-1">
        <ChatNavbar />
        <div className="h-[calc(100vh_-_140px)]">{children}</div>
        <ChatFooter />
      </div>
    </div>
  );
}

export default ChatLayout;
