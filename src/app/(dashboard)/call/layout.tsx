"use client";

import React from "react";
import CallLeftSidebar from "./_components/call-left-sidebar";

function CallPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      <CallLeftSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default CallPageLayout;
