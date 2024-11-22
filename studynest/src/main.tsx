import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import { UserService } from "./services/userService.ts";
import { AddUserRequest } from "./@types/Requests/AddUserRequest";

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "studynest-authclient",
  redirect_uri: "http://localhost:5173/", // TODO: Add duckdns url if in development
  onSigninCallback: async (user) => {
    const request: AddUserRequest = {
      userName: user?.profile.name ?? "",
      email: user?.profile.email ?? "",
      authId: user?.id_token ?? ""
    }
    UserService.AddNewUser(request);
    UserService.UpdateUserStreak(user?.profile.email ?? "");
    // console.log("USER TOKEN ----------", user?.id_token);
    // console.log("USERNAME", user?.profile.name)
    
    document.cookie = `jwt_token=${user?.id_token}`;
    window.history.replaceState({}, document.title, window.location.pathname);
  },
  automaticSilentRenew: true,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
