import axios from "axios";
import { AddUnitRequest } from "../@types/Requests/AddUnitRequest";
import { EditUnitRequest } from "../@types/Requests/EditUnitRequest";

export const UnitService = {
  AddUnit: async (request: AddUnitRequest) => {
    try {
      const response = await axios.post<boolean>(
        "https://localhost:7021/unit/addUnit",
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Couldn't add unit.");
    }
  },
  EditUnit: async (request: EditUnitRequest) => {
    try {
      const response = await axios.patch<boolean>(
        "https://localhost:7021/unit/editunit",
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Couldn't edit unit.");
    }
  },
};
