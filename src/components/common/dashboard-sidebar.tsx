"use client";

import { dashboardSidebarData } from "@data/data";
import { Avatar, Button, Divider, Image, Switch } from "@nextui-org/react";
import { ISidebar } from "@type/index";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gear } from "phosphor-react";

function DashboardSidebar() {
  const pathname = usePathname();
  const settingActive = pathname === "/setting";
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
            const isActive = pathname === item.href;
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
            href={`/setting`}
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
        <ThemeToggle />
        <Avatar
          alt="My Avatar"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </div>
    </div>
  );
}

export default DashboardSidebar;

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      onClick={toggleTheme}
      defaultSelected
      aria-label="Automatic updates"
      size="sm"
      className="w-10 mx-auto"
    />
  );
}
