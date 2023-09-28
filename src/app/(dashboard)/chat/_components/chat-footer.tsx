"use client";

import { Button, Input } from "@nextui-org/react";
import { LinkSimple, Smiley, TelegramLogo } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import ChatFooterActions from "./chat-footer-actions";
import EmojiPicker from "./emoji-picker";

function ChatFooter() {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  return (
    <div className="w-full dark:bg-dark-light bg-light h-[70px] px-6 py-5 flex justify-between items-center gap-6">
      <ChatInput setOpenEmojiPicker={setOpenEmojiPicker} />
      <EmojiPicker openEmojiPicker={openEmojiPicker} />
      <Button
        variant={"solid"}
        isIconOnly
        color={"primary"}
        className="w-12 h-12 !flex-shrink-0"
      >
        <TelegramLogo size="24px" />
      </Button>
    </div>
  );
}

export default ChatFooter;

const ChatInput = ({
  setOpenEmojiPicker,
}: {
  setOpenEmojiPicker: Dispatch<SetStateAction<boolean>>;
}) => {
  const [openActions, setOpenActions] = useState(false);
  return (
    <Input
      radius="md"
      classNames={{
        input: [
          "bg-transparent",
          "text-secondary",
          "placeholder:text-secondary placeholder:font-semibold",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "dark:bg-theme-dark bg-theme-light h-[50px] text-secondary",
          "focus-within:!bg-theme-light dark:focus-within:!bg-theme-dark",
          "hover:!bg-theme-light dark:hover:!bg-theme-dark",
          "!cursor-text",
        ],
      }}
      placeholder="Type to search..."
      startContent={
        <div>
          <ChatFooterActions
            openActions={openActions}
            setOpenActions={setOpenActions}
          />
          <div className="w-12 flex justify-center items-end overflow-hidden rounded-md">
            <Button
              onClick={() => setOpenActions((prev) => !prev)}
              size="md"
              variant="light"
              color="primary"
              className="hover:!bg-transparent"
              fullWidth
            >
              <LinkSimple size={24} />
            </Button>
          </div>
        </div>
      }
      endContent={
        <div className="w-12 flex justify-center items-end overflow-hidden rounded-md">
          <Button
            onClick={() => setOpenEmojiPicker((prev) => !prev)}
            variant="light"
            color="primary"
            className="hover:!bg-transparent"
            fullWidth
          >
            <Smiley size={24} />
          </Button>
        </div>
      }
    />
  );
};
