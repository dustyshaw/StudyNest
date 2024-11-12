import axios from "axios";
import { AddUserRequest } from "../@types/Requests/AddUserRequest";

export const UserService = {
    AddNewUser: async(request: AddUserRequest) => {
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
    }
}