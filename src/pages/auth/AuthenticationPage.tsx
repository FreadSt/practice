import {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="button login"
    >
      Log In
    </button>
  );
};

const SignUpButton = () => {
  const {
    loginWithRedirect: login,
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  return (
    <button
      onClick={signup}
      className="button login"
    >
      signup
    </button>
  );
};

export const AuthenticationPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-5xl">Welcome, please <LoginButton /> or <SignUpButton/></h1>
    </main>
  )
}