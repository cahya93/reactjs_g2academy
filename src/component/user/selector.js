import { selector } from "recoil";
import { users, filterUsersValue } from ".";

export const filterUsers = selector({
  key: "filterUsers",
  get: ({ get }) => {
    const usersState = get(users);
    const filterUsersValueState = get(filterUsersValue);

    if (filterUsersValueState.length) {
      return usersState.filter(
        (item) => item.lastname.includes(filterUsersValueState.trim()) && item
      );
    }
    return users;
  },
});
