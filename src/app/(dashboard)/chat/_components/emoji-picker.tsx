import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { cn } from "@nextui-org/react";
import { useTheme } from "next-themes";

function EmojiPicker({ openEmojiPicker }: { openEmojiPicker: boolean }) {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "fixed right-16 bottom-[70px] z-50",
        !openEmojiPicker ? "hidden" : "block"
      )}
    >
      <Picker
        theme={theme === "light" ? "light" : "dark"}
        data={data}
        onEmojiSelect={console.log}
      />
    </div>
  );
}
export default EmojiPicker;
