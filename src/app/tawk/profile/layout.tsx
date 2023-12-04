"use client";
import React from "react";
import ProfileLeftSidebar from "./_components/profile-left-sidebar";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@utils/axios";
import { cookie } from "@utils/cookie";
import { getUserProfile } from "@utils/actions";
import { useSearchParams } from "next/navigation";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  const userId = useSearchParams().get("userId");
  const { data, isLoading } = useQuery({
    queryKey: ["getProfile", userId],
    queryFn: async () => {
      const profile = await getUserProfile(userId);
      return profile;
    },
  });
  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      {!isLoading && <ProfileLeftSidebar data={data} />}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default ProfileLayout;
