import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services/userService";

export const UserQueries = {
    useGetUserByEmail: (email: string) => {
        return useQuery({
            queryKey: ["user"],
            queryFn: () => UserService.GetUserByEmail(email)
        });
    }
}