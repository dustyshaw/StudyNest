import { createContext } from "react";
import { UserAccount } from "../@types/userAccount";

export interface UserContextInterface {
    user: UserAccount | undefined | null;
    error: string | undefined;
    isLoading: boolean;
}

export const UserContext = createContext<UserContextInterface | undefined>(
    undefined
);
