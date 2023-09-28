import { Profile_Menu } from "@data/data";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

function ProfileMenu() {
  return (
    <Dropdown placement="right-end">
      <DropdownTrigger className="cursor-pointer">
        <Avatar
          as="button"
          alt="My Avatar"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {Profile_Menu.map((item) => {
          return (
            <DropdownItem key={item.title} color={"primary"}>
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
