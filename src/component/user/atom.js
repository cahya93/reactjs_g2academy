import { atom } from "recoil";

export const users = atom({
  key: "users",
  default: [],
});

export const filterUsersValue = atom({
  key: "filterUsersValue",
  default: "",
});
