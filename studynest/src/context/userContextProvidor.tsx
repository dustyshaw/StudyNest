import React from "react";
import { FC, ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { UserAccount } from "../@types/userAccount";
import { UserQueries } from "../Queries/userQueries";

export interface UserContextInterface {
    user: UserAccount | undefined | null;
    error: string | undefined;
    isLoading: boolean;
}

export const UserContext = React.createContext<UserContextInterface | null>(
    null
);

export const UserContextProvidor: FC<{ children: ReactNode }> = ({
    children
}) => {
    const authuser = useAuth();


    const email = authuser.user?.profile.email ?? "";

    const { data: userdata, isLoading, error } = UserQueries.useGetUserByEmail(email ?? "");
    // const { data: userdata, isLoading, error } = useQuery({
    //     queryKey: ["user"],
    //     queryFn: () => UserService.GetUserByEmail(email),
    // });

    //console.log("const { data: userdata, isLoading, error } = useQuery({ => ", userdata)


    return (
        <UserContext.Provider
            value={{
                user: userdata || null,
                error: error?.message,
                isLoading: isLoading
            }}
        >
            {children}
        </UserContext.Provider>
    )

}
