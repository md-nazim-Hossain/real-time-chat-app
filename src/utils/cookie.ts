import { deleteCookie, getCookie, setCookie } from "cookies-next";

const set = (value: string, expires: number) => {
  setCookie("token", value, {
    expires: new Date(Date.now() + expires),
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};

const remove = () => {
  deleteCookie("token");
};

const getToken = () => {
  return getCookie("token");
};

export const cookie = {
  set,
  remove,
  getToken,
};
