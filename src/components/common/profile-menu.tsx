"use client";

import { Profile_Menu } from "@data/data";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IProfile } from "@type/index";
import { useRouter } from "next/navigation";

function ProfileMenu({ data }: { data: IProfile }) {
  const router = useRouter();
  return (
    <Dropdown placement="right-end">
      <DropdownTrigger className="cursor-pointer">
        <Avatar
          as="button"
          alt="My Avatar"
          src={
            data?.avatar ?? "https://i.pravatar.cc/150?u=a042581f4e29026024d"
          }
          className="w-12 h-12"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {Profile_Menu.map((item, index: number) => {
          return (
            <DropdownItem
              onClick={() => item.onclick(router)}
              key={index}
              color={"primary"}
              textValue={item.title}
            >
              <div className="flex items-center justify-between">
                <span>{item.title}</span>
                <item.icon size={20} />
              </div>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

export default ProfileMenu;
