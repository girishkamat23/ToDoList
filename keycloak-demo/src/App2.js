import { useEffect, useState } from 'react';
import './App.css';
import keycloak from './keycloak';

// Wrap everything inside KeycloakProvider
const App2 = () => {
  const [user, setUser] = useState(null);
  const { authenticated, idTokenParsed } = keycloak;

  useEffect(() => {
    console.log({ authenticated, idTokenParsed, keycloak });
    if (authenticated) {
      setUser(idTokenParsed);
    }
    //eslint-disable-next-line
  }, [authenticated, idTokenParsed]);

  console.log(keycloak.hasRealmRole('admin'));

  return (
    <div>
      <header>
        <button onClick={keycloak.logout}>Logout</button>
        <button onClick={keycloak.login}>Login</button>
      </header>
      <section>
        <h3>Welcome {user?.given_name}</h3>
      </section>
      <footer>Copyright &copy;</footer>
    </div>
  );
};

export default App2;
