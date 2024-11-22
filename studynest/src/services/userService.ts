import axios from "axios";
import { AddUserRequest } from "../@types/Requests/AddUserRequest";
import { UserAccount } from "../@types/userAccount";

export const UserService = {
  AddNewUser: async (request: AddUserRequest) => {
    try {
      const response = await axios.post<boolean>(
        "https://localhost:7021/addUser",
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Couldn't add user.");
    }
  },
  GetUserByEmail: async (email: string) => {
    try {
      const response = await axios.post<UserAccount>(
        "https://localhost:7021/user/getByEmail",
        email,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Couldn't find user.");
    }
  },
  UpdateUserStreak: async (email: string) => {
    try {
      const response = await axios.post<number>(
        "https://localhost:7021/user/updatestreak",
        email,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Couldn't find user.");
    }
  }
}