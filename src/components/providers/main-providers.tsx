"use client";

import { NextUIProvider } from "@nextui-org/react";
import { store } from "@redux/store";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from "react-redux";
function MainProviders({ children }: ThemeProviderProps) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </Provider>
    </NextUIProvider>
  );
}

export default MainProviders;
