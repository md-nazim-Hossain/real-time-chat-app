"use client";

import { Avatar, AvatarIcon, Button, cn } from "@nextui-org/react";
import { IUser } from "@type/index";
import { IconProps } from "phosphor-react";
import React from "react";

type Props = {
  user: IUser;
  action: () => void;
  buttonText: string | any;
};
function UserAction({ user, action, buttonText }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="flex items-center relative">
          <Avatar
            src={user.avatar}
            icon={<AvatarIcon />}
            classNames={{
              base: "bg-gradient-to-br from-primary to-[#FF705B]",
              icon: "text-black/80",
            }}
          />
          <span
            className={cn(
              "z-10 border-2 border-white translate-y-1/2 absolute bottom-[4px] right-1 w-[12px] h-[12px] rounded-full  inline-block",
              user.status === "Online" ? "bg-[#76D45E]" : "bg-dark-gray"
            )}
          ></span>
        </div>
        <h2 className="font-medium text-lg">
          {user.firstName} {user.lastName}
        </h2>
      </div>
      <Button
        onPress={action}
        size="sm"
        radius="sm"
        variant="light"
        color="primary"
        className="hover:bg-primary/40"
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default UserAction;
