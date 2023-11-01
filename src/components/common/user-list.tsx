"use client";

import { useQuery } from "@tanstack/react-query";
import { IUser } from "@type/index";
import { getAllUsers } from "@utils/actions";

function UserList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: async () => await getAllUsers(),
  });
  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      {data.length ? (
        <div>
          {data.map((user: IUser, index: number) => {
            return <div key={index}>{user?.firstName}</div>;
          })}
        </div>
      ) : (
        <p>No users</p>
      )}
    </div>
  );
}

export default UserList;
