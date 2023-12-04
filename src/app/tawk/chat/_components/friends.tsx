"use client";

import UserAction from "@components/common/user-action";
import UserListSkeleton from "@components/skeleton/user-list-skeleton";
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@type/index";
import { getAllFriendRequests, getFriends } from "@utils/actions";
import { socket } from "@utils/socket";
import { Chat } from "phosphor-react";
import React from "react";

function Friends({ onClose }: { onClose: () => void }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getFriends"],
    queryFn: async () => await getFriends(),
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
                    socket.emit("startConversation", {
                      to: user._id,
                      from: userId,
                    });
                  onClose();
                }}
                buttonText={<Chat size={20} />}
                key={index}
                user={user}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center py-2">No Friends</p>
      )}
    </div>
  );
}

export default Friends;
