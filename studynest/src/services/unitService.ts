import axios from "axios";
import { AddUnitRequest } from "../@types/Requests/AddUnitRequest";
import { EditUnitRequest } from "../@types/Requests/EditUnitRequest";

export const UnitService = {
  AddUnit: async (request: AddUnitRequest) => {
    try {
      const response = await axios.post<boolean>(
        `${import.meta.env.VITE_URL}/unit/addUnit`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data == false) {
        throw new Error("Failed to add unit");
      }
      return response.data;
    } catch {
      console.error("Couldn't add unit.");
    }
  },
  EditUnit: async (request: EditUnitRequest) => {
    try {
      const response = await axios.patch<boolean>(
        `${import.meta.env.VITE_URL}/unit/editunit`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data == false) {
        throw new Error("Failed to edit unit");
      }
      return response.data;
    } catch {
      console.error("Couldn't edit unit.");
    }
  },
};
