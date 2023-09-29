"use client";
import React from "react";
import SettingLeftSidebar from "./_components/setting-left-sidebar";

function SettingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      <SettingLeftSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default SettingLayout;
