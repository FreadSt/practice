import {Link} from 'react-router-dom';
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

export const AuthenticationPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <h1>Welcome, please <LoginButton /> or <Link to={'/sign-up'}>Sign up</Link></h1>
    </main>
  )
}