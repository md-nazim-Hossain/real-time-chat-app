"use client";

import { faker } from "@faker-js/faker";
import { Avatar } from "@nextui-org/react";
import { IChatList } from "@type/index";

type Props = {
  user: IChatList;
};
function UserInfoAvatar({ user }: Props) {
  return (
    <div className="flex items-center gap-8">
      <Avatar
        src={user?.img}
        alt={user?.id + " " + user?.name}
        className="w-12 h-12"
      />
      <div>
        <p className="font-semibold dark:text-white text-extra-dark-gray">
          {user?.name}
        </p>
        <p className="font-semibold text-extra-dark-gray dark:text-white">
          {faker.phone.number()}
        </p>
      </div>
    </div>
  );
}

export default UserInfoAvatar;
