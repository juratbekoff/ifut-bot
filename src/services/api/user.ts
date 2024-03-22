import { api } from "../configs";

import WebApp from "@twa-dev/sdk";
const userTgId = WebApp.initDataUnsafe.user?.id;

// const userTgId = 791944079;

class User {
  getInfo = async () => {
    return await api.get(`/user/${userTgId}`);
  };
}

export const userService = new User();
