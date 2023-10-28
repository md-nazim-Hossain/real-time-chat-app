"use client";

import SearchInput from "@components/common/search-input";
import { CallList } from "@data/data";
import { Button, Divider, useDisclosure } from "@nextui-org/react";
import { Phone } from "phosphor-react";
import CallElement from "./call-element";
import CreateCallModal from "./create-call-modal";

function CallLeftSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="relative w-[340px] h-full dark:bg-dark-light bg-light  shadow-sidebar">
      <div className="p-5 pb-0">
        <h1>Call Logs</h1>
        <div className="pt-8 pb-9">
          <SearchInput />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-secondary font-bold">Start New Conversations</p>
          <Button
            radius="sm"
            onPress={onOpen}
            color="secondary"
            variant="light"
            className=" hover:!bg-transparent font-manrope font-bold min-w-max"
          >
            <Phone size={20} />
          </Button>
        </div>
        <Divider className="mt-4" />
      </div>
      <div className="w-full max-h-[calc(100vh_-_243px)] overflow-y-auto scroll pb-5">
        <div className="p-5 space-y-5">
          {CallList.map((call: any, index: number) => {
            return <CallElement call={call} key={index} />;
          })}
        </div>
      </div>
      <CreateCallModal isOpen={isOpen} onOpenChange={onClose} />
    </div>
  );
}

export default CallLeftSidebar;
