"use client";

import UserList from "@app/tawk/chat/_components/user-list";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { Users } from "phosphor-react";
import { useState } from "react";
import FriendRequest from "./friend-request";
import Friends from "./friends";

function UserChatControl() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState("explore");

  return (
    <>
      <Button
        onPress={onOpen}
        size="md"
        variant="light"
        isIconOnly
        aria-label={"circle dashed"}
      >
        <Users color="#676667" size={"28px"} />
      </Button>
      <Modal
        classNames={{
          backdrop:
            "bg-gradient-to-bl from-black/50 to-black/10 backdrop-opacity-10",
          base: "dark:bg-dark-light bg-light ",
          wrapper: "overflow-hidden",
          body: "scroll",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Tabs
                  variant="bordered"
                  onSelectionChange={(key) => setValue(key as string)}
                  color="primary"
                  aria-label="Dynamic tabs"
                >
                  <Tab key="explore" title="Explore" />
                  <Tab key="friends" title="Friends" />
                  <Tab key="requests" title="Requests" />
                </Tabs>
              </ModalHeader>
              <ModalBody className="pb-4">
                {(() => {
                  switch (value) {
                    case "explore":
                      return <UserList />;
                    case "friends":
                      return <Friends />;
                    case "requests":
                      return <FriendRequest />;
                  }
                })()}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserChatControl;
