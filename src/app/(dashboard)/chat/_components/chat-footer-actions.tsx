import { Actions } from "@data/data";
import { Button, Tooltip, cn } from "@nextui-org/react";
import { IActions } from "@type/index";
import { Dispatch, SetStateAction } from "react";

type Props = {
  openActions: boolean;
  setOpenActions: Dispatch<SetStateAction<boolean>>;
};
function ChatFooterActions({ openActions, setOpenActions }: Props) {
  return (
    <div className="w-max">
      <div className={cn("relative", openActions ? "block" : "hidden")}>
        {Actions.map((item: IActions, index: number) => {
          return (
            <Tooltip placement="right" content={item.title} key={index}>
              <Button
                onClick={() => setOpenActions(!openActions)}
                style={{ background: item.color, top: -item.y + "px" }}
                isIconOnly
                className={cn(
                  `rounded-full w-10 h-10 absolute z-50 text-white hover:!bg-green-800`
                )}
              >
                <item.icon size={20} />
              </Button>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default ChatFooterActions;
