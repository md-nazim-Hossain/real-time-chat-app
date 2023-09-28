"use client";

import { Chat_History } from "@data/data";
import { IChatHistory } from "@type/index";
import {
  DocumentMessage,
  LinkMessage,
  MediaMessage,
  MessageTimeline,
  ReplyMessage,
  TextMessage,
} from "./message-type";

function Conversations() {
  return (
    <div className="w-full h-full bg-theme-light dark:bg-theme-dark p-5 overflow-y-scroll scroll">
      <div>
        {Chat_History.map((item: IChatHistory, index: number) => {
          switch (item.type) {
            case "divider":
              return <MessageTimeline key={index} text={item.text as string} />;
            case "msg":
              switch (item.subtype) {
                case "img":
                  return <MediaMessage key={index} item={item} />;
                case "doc":
                  return <DocumentMessage key={index} item={item} />;
                case "link":
                  return <LinkMessage key={index} item={item} />;
                case "reply":
                  return <ReplyMessage key={index} item={item} />;
                default:
                  return <TextMessage key={index} item={item} />;
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
