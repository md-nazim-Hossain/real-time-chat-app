"use client";

import UserChatControl from "@app/tawk/chat/_components/user-chat-control";
import UserChat from "@components/common/user-chat";
import { Button, Divider } from "@nextui-org/react";
import { IChatList } from "@type/index";
import { CircleDashed } from "phosphor-react";
import SearchInput from "./search-input";
import { socket } from "@utils/socket";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { setConversation } from "@redux/slice/conversationSlice";
import UserChatSkeleton from "@components/skeleton/user-chat-skeleton";

type Props = {
  title: string;
  children: React.ReactNode;
  isGroup?: boolean;
};
function LeftSideBar({ title, children, isGroup = false }: Props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const userId =
    typeof window !== "undefined" && localStorage.getItem("userId");
  const { conversations } = useAppSelector(
    (state) => state.conversation.directChat
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (userId) {
      socket?.emit("getDirectConversation", { userId }, (data: any) => {
        dispatch(setConversation({ conversations: data }));
        setIsLoading(false);
      });
    }
    return () => {
      setIsLoading(false);
      socket.off("getDirectConversation");
    };
  }, [userId]);

  return (
    <div className="relative w-[340px] h-full dark:bg-dark-light bg-light  shadow-sidebar">
      <div className="p-5 pb-0">
        <div className="flex items-center justify-between">
          <h1>{title}</h1>
          {!isGroup && (
            <div className="flex gap-4 items-center">
              <UserChatControl />
              <Button
                size="md"
                variant="light"
                isIconOnly
                aria-label={"circle dashed"}
              >
                <CircleDashed color="#676667" size={"28px"} />
              </Button>
            </div>
          )}
        </div>
        <div className="pt-8 pb-9">
          <SearchInput />
        </div>

        {children}
        <Divider className="mt-4" />
      </div>
      <div className="w-full max-h-[calc(100vh_-_243px)] overflow-y-auto scroll">
        {isLoading ? (
          <div>
            {[1, 2, 3, 4].map((i: number) => (
              <UserChatSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="p-5">
            <p className="font-bold pl-3 mb-6 pt-4">Pinned</p>
            <div className="space-y-5">
              {conversations
                .filter((chat) => chat.pinned)
                .map((chat: IChatList, index: number) => {
                  return <UserChat chat={chat} key={index} />;
                })}
            </div>

            <p className="font-bold pt-7 pb-5">All {title}</p>
            <div className="space-y-5">
              {conversations
                .filter((chat) => !chat.pinned)
                .map((chat: IChatList, index: number) => {
                  return <UserChat chat={chat} key={index} />;
                })}
            </div>
          </div>
        )}
        {/* <div className="p-5">
          <p className="font-bold pl-3 mb-6 pt-4">Pinned</p>
          <div className="space-y-5">
            {conversations
              .filter((chat) => chat.pinned)
              .map((chat: IChatList, index: number) => {
                return <UserChat chat={chat} key={index} />;
              })}
          </div>

          <p className="font-bold pt-7 pb-5">All {title}</p>
          <div className="space-y-5">
            {conversations
              .filter((chat) => !chat.pinned)
              .map((chat: IChatList, index: number) => {
                return <UserChat chat={chat} key={index} />;
              })}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default LeftSideBar;
