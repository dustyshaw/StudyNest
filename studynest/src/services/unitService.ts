import axios from "axios";
import { AddUnitRequest } from "../@types/Requests/AddUnitRequest";

export const UnitService = {
  AddUnit: async (request: AddUnitRequest) => {
    console.log(request)
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
      console.error("Couldn't add course.");
    }
  },
};
