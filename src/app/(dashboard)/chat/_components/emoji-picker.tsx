"use client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { cn } from "@nextui-org/react";
import { useTheme } from "next-themes";

type Props = {
  openEmojiPicker: boolean;
  onEmojiSelect: (e: any) => void;
  setOpenEmojiPicker: (openEmojiPicker: boolean) => void;
};
function EmojiPicker({
  openEmojiPicker,
  onEmojiSelect,
  setOpenEmojiPicker,
}: Props) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "fixed right-28 bottom-[70px] z-50",
        !openEmojiPicker ? "hidden" : "block"
      )}
    >
      <Picker
        onClickOutside={() => {
          if (openEmojiPicker) setOpenEmojiPicker(false);
        }}
        theme={theme === "light" ? "light" : "dark"}
        data={data}
        onEmojiSelect={onEmojiSelect}
      />
    </div>
  );
}
export default EmojiPicker;
