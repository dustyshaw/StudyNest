import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

function LoginButton() {
  const auth = useAuth();

    useEffect(() => {
        console.log("NEw yser");
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
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        Hello {auth.user?.profile.sub}{" "}
        <button onClick={() => {void auth.removeUser(); auth.removeUser()}}>Log out</button>
      </div>
    );
  }

  return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default LoginButton;
