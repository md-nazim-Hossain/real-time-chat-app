import { Skeleton } from "@nextui-org/react";
import React from "react";

function UserListSkeleton() {
  return (
    <div className="w-full flex items-center justify-between ">
      <div className="flex items-center gap-2 flex-1">
        <Skeleton className="flex flex-shrink-0 rounded-full w-12 h-12" />
        <Skeleton className="h-4 w-2/5 rounded-lg" />
      </div>
      <Skeleton className="h-9 w-[100px] rounded-lg" />
    </div>
  );
}

export default UserListSkeleton;
