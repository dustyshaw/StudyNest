import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import LoadingComponent from "../components/LoadingComponent";

function LoginButton() {
  const auth = useAuth();

    useEffect(() => {
        if (auth.user) {
            const date = new Date((auth.user.expires_at ?? 0)* 1000)
            document.cookie = `auth_token=${auth.user.id_token};expires=${date.toUTCString()}`
        }
    })

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <LoadingComponent />;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        Hello, {auth.user?.profile.name?.split(" ")[0]}!{" "}
        <button onClick={() => {void auth.removeUser(); auth.removeUser()}} className="bg-navy-600 rounded-lg text-white px-5 py-2 m-5 shadow hover:bg-navy-550 hover:shadow-none">Log out</button>
      </div>
    );
  }

  return <button onClick={() => void auth.signinRedirect()} className="bg-navy-600 rounded-lg text-white px-5 py-2 m-5 shadow hover:bg-navy-550 hover:shadow-none">Log in</button>;
}

export default LoginButton;
