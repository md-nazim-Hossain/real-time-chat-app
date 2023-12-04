"use client";
import DashboardSidebar from "@components/common/dashboard-sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { cookie } from "@utils/cookie";
import { connectSocket, socket } from "@utils/socket";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@redux/store";
import {
  addDirectConversation,
  addDirectMessage,
  setCurrentConversation,
  updateDirectConversation,
} from "@redux/slice/conversationSlice";
import { selectConversation } from "@redux/slice/chatContactSlice";
import { useRouter } from "next/navigation";
function Layout({ children }: { children: React.ReactNode }) {
  const token = cookie.getToken();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { conversations, currentConversation } = useAppSelector(
    (state) => state.conversation.directChat
  );
  useEffect(() => {
    if (token && typeof window !== "undefined") {
      const userId = localStorage.getItem("userId");
      window.onload = () => {
        if (!window.location.hash) {
          window.location.hash = "#loaded";
          window.location.reload();
        }
      };
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
        dispatch(selectConversation({ roomId: data._id }));
        router.push("/tawk/chat/" + data._id);
      });

      socket.on("newMessage", (data: any) => {
        const message = data?.message;
        if ((currentConversation.id = data?.conversationId)) {
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
  }, [token, socket]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen overflow-hidden flex">
        <DashboardSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </QueryClientProvider>
  );
}

export default Layout;
