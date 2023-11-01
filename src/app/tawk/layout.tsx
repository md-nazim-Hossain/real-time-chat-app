"use client";
import DashboardSidebar from "@components/common/dashboard-sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
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
