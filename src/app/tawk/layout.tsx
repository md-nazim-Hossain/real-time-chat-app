"use client";
import DashboardSidebar from "@components/common/dashboard-sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { cookie } from "@utils/cookie";
import { connectSocket, socket } from "@utils/socket";
import toast from "react-hot-toast";
function Layout({ children }: { children: React.ReactNode }) {
  const token = cookie.getToken();

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
    }
    return () => {
      socket.off("newFriendRequest");
      socket.off("friendRequestAccepted");
      socket.off("requestSent");
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
