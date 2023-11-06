"use client";

import UserAction from "@components/common/user-action";
import UserListSkeleton from "@components/skeleton/user-list-skeleton";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@type/index";
import { getAllFriendRequests } from "@utils/actions";
import { socket } from "@utils/socket";
import React from "react";
import toast from "react-hot-toast";

function FriendRequest() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllFriendRequest"],
    queryFn: async () => await getAllFriendRequests(),
  });

  if (isLoading) return <UserListSkeleton />;
  return (
    <div>
      {data.length ? (
        <div className="px-1">
          {data.map((user: IUser, index: number) => {
            return (
              <UserAction
                action={() =>
                  socket.emit("acceptRequest", { requestId: user?._id }, () => {
                    toast.success("Friend request accepted successfully");
                  })
                }
                buttonText="Accept Request"
                key={index}
                user={user}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center py-2">No Friend Request</p>
      )}
    </div>
  );
}

export default FriendRequest;
