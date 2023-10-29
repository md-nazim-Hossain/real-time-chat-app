import { deleteCookie, setCookie } from "cookies-next";

const set = (value: string, expires: number) => {
  setCookie("token", value, {
    expires: new Date(Date.now() + expires),
  });
};

const remove = () => {
  deleteCookie("token");
};

export const cookie = {
  set,
  remove,
};
