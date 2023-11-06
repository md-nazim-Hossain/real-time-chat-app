"use client";

import UserListSkeleton from "@components/skeleton/user-list-skeleton";
import { Avatar, AvatarIcon, Button } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@type/index";
import { getAllUsers } from "@utils/actions";
import { FC } from "react";
import UserAction from "../../../../components/common/user-action";
import { socket } from "@utils/socket";
import toast from "react-hot-toast";

function UserList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: async () => await getAllUsers(),
  });

  if (isLoading) return <UserListSkeleton />;
  const userId = window.localStorage.getItem("userId");
  return (
    <div>
      {data.length ? (
        <div className="px-1">
          {data.map((user: IUser, index: number) => {
            return (
              <UserAction
                action={() => {
                  userId &&
                    socket.emit(
                      "friendRequest",
                      {
                        to: user._id,
                        from: userId,
                      },
                      () => {
                        toast.success("Friend request sent successfully");
                      }
                    );
                }}
                buttonText="Send Request"
                key={index}
                user={user}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center py-2">No users</p>
      )}
    </div>
  );
}

export default UserList;
