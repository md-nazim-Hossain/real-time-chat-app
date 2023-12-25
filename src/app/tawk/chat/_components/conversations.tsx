"use client";

import { cn } from "@nextui-org/react";
import { IChatHistory, IChatList } from "@type/index";
import {
  DocumentMessage,
  LinkMessage,
  MediaMessage,
  MessageTimeline,
  ReplyMessage,
  TextMessage,
} from "./message-type";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { MutableRefObject, useEffect, useRef } from "react";
import { socket } from "@utils/socket";
import {
  setCurrentConversation,
  setCurrentMessages,
} from "@redux/slice/conversationSlice";
import { useParams } from "next/navigation";

function Conversations({
  showMenu,
  className,
  ref,
}: {
  showMenu?: boolean;
  className?: string;
  ref?: MutableRefObject<HTMLDivElement | null>;
}) {
  const dispatch = useAppDispatch();
  const { conversations, currentMessages } = useAppSelector(
    (state) => state.conversation.directChat
  );
  const { roomId } = useAppSelector((state) => state.chatContactSlice);

  useEffect(() => {
    const current = conversations.find(
      (el: IChatList) => el?.id === (roomId as string)
    );

    if (current) {
      socket?.emit(
        "getMessages",
        { conversationId: current?.id },
        (data: any) => {
          dispatch(setCurrentMessages({ messages: data }));
        }
      );
    }
    dispatch(setCurrentConversation(current));
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-full bg-theme-light dark:bg-theme-dark p-5 overflow-y-scroll scroll",
        className
      )}
    >
      <div>
        {currentMessages?.map((item: IChatHistory, index: number) => {
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
