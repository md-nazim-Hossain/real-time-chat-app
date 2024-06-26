"use client";

import { Link, cn } from "@nextui-org/react";
import { IChatList } from "@type/index";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import ChatAvatar from "./chat-avatar";
import { useAppDispatch } from "@redux/store";
import { selectConversation } from "@redux/slice/chatContactSlice";
type Props = {
  chat: IChatList;
};
function UserChat({ chat }: Props) {
  const { id } = useParams();
  const currentChat = id === chat?.userId;
  const dispatch = useAppDispatch();
  return (
    <Link
      onPress={() => {
        dispatch(selectConversation({ roomId: chat?.id }));
      }}
      href={`/tawk/chat/${chat?.userId}`}
      as={NextLink}
      className={cn(
        "rounded-[15px] p-4 flex justify-between cursor-pointer",
        currentChat ? "bg-primary" : "dark:bg-theme-dark bg-theme-light"
      )}
    >
      <ChatAvatar chat={chat} currentChat={currentChat} />
      <div className="space-y-1.5">
        <p
          className={cn(
            "font-xs font-medium",
            currentChat ? "text-white" : "text-dark-gray"
          )}
        >
          {chat?.time}
        </p>
        {chat?.unread > 0 && (
          <p className="bg-secondary flex justify-center items-center w-4 h-4 rounded-full text-white font-bold text-[10px] ">
            <span>{chat?.unread}</span>
          </p>
        )}
      </div>
    </Link>
  );
}

export default UserChat;
