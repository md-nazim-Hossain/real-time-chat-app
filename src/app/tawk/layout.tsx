import DashboardSidebar from "@components/common/dashboard-sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <DashboardSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default Layout;
