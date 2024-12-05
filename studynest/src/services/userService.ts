import axios from "axios";
import { AddUserRequest } from "../@types/Requests/AddUserRequest";
import { UserAccount } from "../@types/userAccount";

export const UserService = {
  AddNewUser: async (request: AddUserRequest) => {
    try {
      const response = await axios.post<boolean>(
        `${import.meta.env.VITE_URL}/addUser`,
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
    if (!email || email === "") {
      console.error("No user email provided.")
    }
    try {
      const response = await axios.post<UserAccount>(
        `${import.meta.env.VITE_URL}/user/getByEmail`,
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
        `${import.meta.env.VITE_URL}/user/updatestreak`,
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