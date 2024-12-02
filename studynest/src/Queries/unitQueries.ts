import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddUnitRequest } from "../@types/Requests/AddUnitRequest";
import { UnitService } from "../services/unitService";
import toast from "react-hot-toast";
import { EditUnitRequest } from "../@types/Requests/EditUnitRequest";

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
  useEditUnit: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (request: EditUnitRequest) => UnitService.EditUnit(request),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["units"] });
        toast.success("Successfully Added Unit");
      },
    });
  },
};
