"use client";

import { ChatList } from "@data/data";
import { Button, Divider } from "@nextui-org/react";
import { toggleSidebar } from "@redux/slice/chatContactSlice";
import { useAppDispatch } from "@redux/store";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import ChatAvatar from "./chat-avatar";

function ChatNavbar() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between w-full dark:bg-dark-light bg-light h-[70px] px-6 py-5 shadow-sidebar">
      <ChatAvatar
        onClick={() => dispatch(toggleSidebar())}
        chat={ChatList[0]}
        isChat={true}
      />
      <div className="flex items-center gap-3">
        <Button variant={"light"} isIconOnly color={"default"}>
          <VideoCamera size="24px" />
        </Button>
        <Button variant={"light"} isIconOnly color={"default"}>
          <Phone size="24px" />
        </Button>
        <Button variant={"light"} isIconOnly color={"default"}>
          <MagnifyingGlass size="24px" />
        </Button>
        <Divider orientation="vertical" className="h-10" />
        <Button variant={"light"} isIconOnly color={"default"}>
          <CaretDown size="24px" />
        </Button>
      </div>
    </div>
  );
}

export default ChatNavbar;
