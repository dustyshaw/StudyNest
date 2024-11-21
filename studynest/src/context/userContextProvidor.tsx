import { FC, ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { UserQueries } from "../Queries/userQueries";
import { UserContext } from "./UserContext";

export const UserContextProvidor: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const authuser = useAuth();

  const email = authuser.user?.profile.email ?? "";

  const {
    data: userdata,
    isLoading,
    error,
  } = UserQueries.useGetUserByEmail(email ?? "");

  //console.log("const { data: userdata, isLoading, error } = useQuery({ => ", userdata)

  return (
    <UserContext.Provider
      value={{
        user: userdata || null,
        error: error?.message,
        isLoading: isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
