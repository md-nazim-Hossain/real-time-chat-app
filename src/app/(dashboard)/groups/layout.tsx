"use client";

import React from "react";
import GroupRightSidebar from "./_components/group-right-sidebar";

function GroupPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      <GroupRightSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default GroupPageLayout;
