"use client";

import React from "react";
import GroupLeftSidebar from "./_components/group-left-sidebar";

function GroupPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      <GroupLeftSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default GroupPageLayout;
