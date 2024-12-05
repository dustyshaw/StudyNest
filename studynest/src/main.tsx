import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import { UserService } from "./services/userService.ts";
import { AddUserRequest } from "./@types/Requests/AddUserRequest";
import { DynamicLayoutContextProvider } from "./context/DynamicLayoutProvidor.tsx";

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "studynest-authclient",
  redirect_uri:
    process.env.NODE_ENV === "production"
      ? "https://studynest.duckdns.org/"
      : "http://localhost:5173/",
  onSigninCallback: async (user) => {
    const request: AddUserRequest = {
      userName: user?.profile.name ?? "",
      email: user?.profile.email ?? "",
      authId: user?.id_token ?? "",
    };
    UserService.AddNewUser(request);
    UserService.UpdateUserStreak(user?.profile.email ?? "");
    document.cookie = `jwt_token=${user?.id_token}`;
    window.history.replaceState({}, document.title, window.location.pathname);
  },
  automaticSilentRenew: true,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <DynamicLayoutContextProvider>
        <App />
      </DynamicLayoutContextProvider>
    </AuthProvider>
  </StrictMode>
);
