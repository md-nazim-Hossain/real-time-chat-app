"use client";

import UserList from "@components/common/user-list";
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

function Friends() {
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
              <ModalBody>
                {(() => {
                  switch (value) {
                    case "explore":
                      return <UserList />;
                    case "friends":
                      return <p>Friends</p>;
                    case "requests":
                      return <p>Requests</p>;
                  }
                })()}
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="font-semibold border-1"
                  radius="sm"
                  variant="bordered"
                >
                  Cancel
                </Button>
                <Button
                  onPress={onClose}
                  className="font-semibold"
                  radius="sm"
                  color="primary"
                  type="submit"
                >
                  Create Group
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Friends;
