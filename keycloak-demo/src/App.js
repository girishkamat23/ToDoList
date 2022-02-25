import { useEffect } from 'react';
import './App.css';
import UserService from './UserService';
import Routing from './Routing';

// Wrap everything inside KeycloakProvider
const App = () => {
  useEffect(() => {
    console.log({ user: UserService.getUserProfile() });
  }, []);

  return (
    <div>
      <header>
        {!UserService.isLoggedIn() ? (
          <button onClick={UserService.doLogin}>Login</button>
        ) : (
          <button onClick={UserService.doLogout}>Logout</button>
        )}
        <Routing />
      </header>
      <section></section>
      <footer>Copyright &copy;</footer>
    </div>
  );
};

export default App;
