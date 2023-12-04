import { Skeleton } from "@nextui-org/react";
import React from "react";

function UserChatSkeleton() {
  return (
    <div className="px-5 pt-5">
      <div className="dark:bg-theme-dark bg-theme-light rounded-[15px] p-4 flex justify-between items-center">
        <div className="flex justify-between cursor-pointer flex-1 gap-x-4 items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-1/2 rounded-md" />
            <Skeleton className="h-4 w-1/2 rounded-md" />
          </div>
        </div>
        <div className="space-y-1 w-10">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default UserChatSkeleton;
