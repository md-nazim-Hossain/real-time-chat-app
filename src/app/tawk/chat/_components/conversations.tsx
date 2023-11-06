"use client";

import { Chat_History } from "@data/data";
import { cn } from "@nextui-org/react";
import { IChatHistory } from "@type/index";
import {
  DocumentMessage,
  LinkMessage,
  MediaMessage,
  MessageTimeline,
  ReplyMessage,
  TextMessage,
} from "./message-type";
import { useAppDispatch } from "@redux/store";

function Conversations({
  showMenu,
  className,
}: {
  showMenu?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full h-full bg-theme-light dark:bg-theme-dark p-5 overflow-y-scroll scroll",
        className
      )}
    >
      <div>
        {Chat_History.map((item: IChatHistory, index: number) => {
          switch (item.type) {
            case "divider":
              return <MessageTimeline key={index} text={item.text as string} />;
            case "msg":
              switch (item.subtype) {
                case "img":
                  return (
                    <MediaMessage key={index} item={item} showMenu={showMenu} />
                  );
                case "doc":
                  return (
                    <DocumentMessage
                      key={index}
                      item={item}
                      showMenu={showMenu}
                    />
                  );
                case "link":
                  return (
                    <LinkMessage key={index} item={item} showMenu={showMenu} />
                  );
                case "reply":
                  return (
                    <ReplyMessage key={index} item={item} showMenu={showMenu} />
                  );
                default:
                  return (
                    <TextMessage key={index} item={item} showMenu={showMenu} />
                  );
              }
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
}

export default Conversations;
