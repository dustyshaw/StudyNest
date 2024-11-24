import { FC, ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { UserQueries } from "../Queries/userQueries";
import { UserContext } from "./UserContext";

export const UserContextProvidor: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const authuser = useAuth();

  // TODO change this back to the right thing
  const email = authuser.user?.profile.email ?? "dusty.shaw@students.snow.edu";

  const {
    data: userdata,
    isLoading,
    error,
  } = UserQueries.useGetUserByEmail(email ?? "dusty.shaw@students.snow.edu");


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
