import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddUnitRequest } from "../@types/Requests/AddUnitRequest";
import { UnitService } from "../services/unitService";
import toast from "react-hot-toast";

export const UnitQueries = {
  useAddUnit: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (request: AddUnitRequest) => UnitService.AddUnit(request),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["units"] });
        toast.success("Successfully Added Unit");
      },
    });
  },
};
