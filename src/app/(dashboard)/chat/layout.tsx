"use client";

import LeftSideBar from "@components/common/left-sidebar";
import { Button } from "@nextui-org/react";
import { ArchiveBox } from "phosphor-react";
import React from "react";

function ChatPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      <LeftSideBar title="Chats">
        <div className="flex items-center gap-3">
          <ArchiveBox size={24} />
          <Button
            radius="sm"
            color="secondary"
            variant="light"
            className=" hover:!bg-transparent font-manrope font-bold"
          >
            Archive
          </Button>
        </div>
      </LeftSideBar>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default ChatPageLayout;
