"use client";

import { NextUIProvider } from "@nextui-org/react";
import { store } from "@redux/store";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
function MainProviders({ children }: ThemeProviderProps) {
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
