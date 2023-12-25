"use client";

import { Avatar } from "@nextui-org/react";
import { IProfile } from "@type/index";

type Props = {
  user: IProfile;
};
function UserInfoAvatar({ user }: Props) {
  return (
    <div className="flex items-center gap-8">
      <Avatar
        src={user?.avatar}
        alt={user?._id + " " + user?.firstName}
        className="w-12 h-12"
      />
      <div>
        <p className="font-semibold dark:text-white text-extra-dark-gray">
          {user?.firstName} {user?.lastName}
        </p>
        <p className="font-semibold text-xs text-extra-dark-gray dark:text-white">
          {user?.email}
        </p>
      </div>
    </div>
  );
}

export default UserInfoAvatar;
