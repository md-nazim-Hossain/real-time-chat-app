"use client";

import { DashboardTheme } from "@components/theme/theme";
import { dashboardSidebarData } from "@data/data";
import { Button, Divider, Image, Skeleton } from "@nextui-org/react";
import { ISidebar } from "@type/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gear } from "phosphor-react";
import ProfileMenu from "./profile-menu";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@utils/actions";

function DashboardSidebar() {
  const pathname = usePathname();
  const settingActive = pathname === "/settings";
  const userId =
    typeof window !== "undefined" && localStorage.getItem("userId");
  const { data, isLoading } = useQuery({
    queryKey: ["getProfile", userId],
    queryFn: async () => {
      const profile = await getUserProfile(userId);
      return profile;
    },
  });
  return (
    <div className="shadow-sidebar dark:bg-theme-dark bg-theme-light w-[100px] h-screen py-5 flex flex-col items-center justify-between">
      <div>
        <div className="space-y-8 flex flex-col items-center justify-center">
          <Button
            href={`/`}
            as={Link}
            isIconOnly
            aria-label={"Logo"}
            size="lg"
            className="rounded-md bg-[#AFBBF7]"
          >
            <Image
              src={"/assets/images/logo.ico"}
              width={37}
              height={37}
              alt="logo"
            />
          </Button>
          {dashboardSidebarData.map((item: ISidebar, index: number) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Button
                key={index}
                href={`${item.href}`}
                as={Link}
                variant={!isActive ? "light" : "solid"}
                isIconOnly
                color={isActive ? "primary" : "default"}
                aria-label={item.ariaLabel}
              >
                <item.Icon size="18px" />
              </Button>
            );
          })}
        </div>
        <Divider className="my-6" />
        <div className="flex items-center justify-center">
          <Button
            href={`/tawk/settings`}
            as={Link}
            variant={!settingActive ? "light" : "solid"}
            isIconOnly
            color={settingActive ? "primary" : "default"}
            aria-label={"Setting"}
          >
            <Gear size="18px" />
          </Button>
        </div>
      </div>
      <div className="gap-6 flex flex-col items-center justify-center">
        <DashboardTheme />
        {isLoading ? (
          <Skeleton className="w-12 h-12 rounded-full" />
        ) : (
          <ProfileMenu data={data} />
        )}
      </div>
    </div>
  );
}

export default DashboardSidebar;
