"use client";

import { NextUIProvider } from "@nextui-org/react";
import { store } from "@redux/store";
import { cookie } from "@utils/cookie";
import { connectSocket, socket } from "@utils/socket";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
function MainProviders({ children }: ThemeProviderProps) {
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
  }, [token]);
  return (
    <NextUIProvider>
      <Provider store={store}>
        <ThemeProvider attribute="class">
          <Toaster
            // toastOptions={{
            //   className: "",
            //   style: {
            //     backgroundColor: "#2C3246",
            //     color: "white",
            //   },
            // }}
            position="bottom-center"
            reverseOrder={false}
          />
          {children}
        </ThemeProvider>
      </Provider>
    </NextUIProvider>
  );
}

export default MainProviders;
