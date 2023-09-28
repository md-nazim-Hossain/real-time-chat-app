import { Actions } from "@data/data";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { IActions } from "@type/index";
import { ReactNode } from "react";

type Props = {
  trigger: ReactNode;
};
function ChatFooterActions({ trigger }: Props) {
  return (
    <Popover key={"top"} placement={"top-start"} color="primary">
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>
        {Actions.map((item: IActions, index: number) => {
          return (
            <Button key={index} variant={"shadow"} isIconOnly color={"default"}>
              <item.icon size={24} />
            </Button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}

export default ChatFooterActions;
