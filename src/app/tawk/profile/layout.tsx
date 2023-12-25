"use client";
import React from "react";
import ProfileLeftSidebar from "./_components/profile-left-sidebar";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { IProfile } from "@type/index";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  const userId = useSearchParams().get("userId");
  const queryClient = useQueryClient();
  const profileData = queryClient.getQueryData([
    "getProfile",
    userId,
  ]) as IProfile;

  return (
    <div className="flex relative h-screen w-[calc(100vw_-_100px)]">
      {profileData && <ProfileLeftSidebar data={profileData} />}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default ProfileLayout;
