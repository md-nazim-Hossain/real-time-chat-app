"use client";

import { IApiResponse, IUser } from "@type/index";

import axiosInstance from "./axios";
import { catchAsyncFetch } from "./catchAsync";
import { cookie } from "./cookie";

export const getAllUsers = catchAsyncFetch(async () => {
  const { data }: { data: IApiResponse<IUser[]> } = await axiosInstance.get(
    "/user/get-users",
    {
      headers: {
        authorization: `Bearer ${cookie.getToken()}`,
      },
    }
  );
  const users = data.data;
  return users;
});

export const getFriends = catchAsyncFetch(async () => {
  const { data }: { data: IApiResponse<IUser[]> } = await axiosInstance.get(
    "/user/get-friends",
    {
      headers: {
        authorization: `Bearer ${cookie.getToken()}`,
      },
    }
  );
  const friends = data.data;
  return friends;
});

export const getAllFriendRequests = catchAsyncFetch(async () => {
  const { data }: { data: IApiResponse<IUser[]> } = await axiosInstance.get(
    "/user/get-friend-requests",
    {
      headers: {
        authorization: `Bearer ${cookie.getToken()}`,
      },
    }
  );
  const friendRequest = data.data;
  return friendRequest;
});

export const getUserProfile = catchAsyncFetch(async (userId: string) => {
  const { data }: { data: IApiResponse<IUser[]> } = await axiosInstance.get(
    "/user/profile",
    {
      params: {
        userId,
      },
      headers: {
        authorization: `Bearer ${cookie.getToken()}`,
      },
    }
  );
  const profile = data.data;
  return profile;
});
export const updateProfile = catchAsyncFetch(
  async (data: Omit<IUser, "firstName" | "lastName" | "about" | "avatar">) => {
    const { data: updated }: { data: IApiResponse<IUser[]> } =
      await axiosInstance.patch(
        "/user/update-me",
        {
          ...data,
        },
        {
          headers: {
            authorization: `Bearer ${cookie.getToken()}`,
          },
        }
      );
    const profile = updated.data;
    return profile;
  }
);
