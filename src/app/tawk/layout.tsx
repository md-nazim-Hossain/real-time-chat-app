"use client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import DashboardSidebar from "@components/common/dashboard-sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { connectSocket, socket } from "@utils/socket";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@redux/store";
import {
  addDirectConversation,
  addDirectMessage,
  updateDirectConversation,
} from "@redux/slice/conversationSlice";
import { selectConversation } from "@redux/slice/chatContactSlice";
import { useRouter } from "next/navigation";
import { IUser } from "@type/index";
function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { conversations, currentConversation } = useAppSelector(
    (state) => state.conversation.directChat
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = localStorage.getItem("userId");
      // window.onload = () => {
      //   if (!window.location.hash) {
      //     window.location.hash = "#loaded";
      //     window.location.reload();
      //   }
      // };
      if (!socket) {
        connectSocket(userId!);
      }

      //new friend request
      socket.on("newFriendRequest", (data: any) => {
        toast.success(data.message);
      });

      // request accepted
      socket.on("friendRequestAccepted", (data: any) => {
        toast.success(data.message);
      });

      // request sent
      socket.on("requestSent", (data: any) => {
        toast.success(data.message);
      });

      socket.on("startChat", (data: any) => {
        const existingConversation = conversations.find(
          (el) => el?.id === data._id
        );

        if (existingConversation) {
          dispatch(updateDirectConversation({ conversation: data }));
        } else {
          dispatch(addDirectConversation({ conversation: data }));
        }
        const userFind = data?.participants.find(
          (p: IUser) => p._id !== userId
        );
        dispatch(selectConversation({ roomId: data._id }));
        router.push("/tawk/chat/" + userFind._id);
      });

      socket.on("newMessage", (data: any) => {
        const message = data?.message;
        if (currentConversation?.id === data?.conversationId) {
          dispatch(
            addDirectMessage({
              message: {
                id: message._id,
                type: "msg",
                subtype: message.type,
                message: message.text,
                incoming: message.to === userId,
                outgoing: message.from === userId,
              },
            })
          );
        }
      });
    }
    return () => {
      socket.off("newFriendRequest");
      socket.off("friendRequestAccepted");
      socket.off("requestSent");
      socket.off("startChat");
      socket.off("newMessage");
    };
  }, [socket]);

  const [client] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <div className="w-screen h-screen overflow-hidden flex">
        <DashboardSidebar />
        <div className="flex-1">{children}</div>
      </div>
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

export default Layout;
