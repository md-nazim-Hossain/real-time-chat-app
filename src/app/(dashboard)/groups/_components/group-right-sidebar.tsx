"use client";

import GroupChatUserList from "@components/common/group-chat-user-list";
import { Button, useDisclosure } from "@nextui-org/react";
import { Plus } from "phosphor-react";
import CreateGroup from "./create-group";

function GroupRightSidebar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <GroupChatUserList title="Groups" isGroup={true}>
        <div className="flex items-center justify-between">
          <p className="text-secondary font-bold">Create New Group</p>
          <Button
            onPress={onOpen}
            radius="sm"
            color="secondary"
            variant="light"
            className=" hover:!bg-transparent font-manrope font-bold min-w-max"
          >
            <Plus size={20} />
          </Button>
        </div>
      </GroupChatUserList>
      <CreateGroup isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default GroupRightSidebar;
