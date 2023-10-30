"use client";

import {
  Button,
  Modal,
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
                  <Tab key="explore">Explore</Tab>
                  <Tab key="friends">Friends</Tab>
                  <Tab key="requests">Requests</Tab>
                </Tabs>
              </ModalHeader>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
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
