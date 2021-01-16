import { useState } from 'react';
import './App.css';
import Chat from './screens/Chat/Chat';
import LoginTest from './screens/Login/LoginTest';
import AuthenticationService from './services/authentication';

function App() {
  const [logged, setLogged] = useState(AuthenticationService.isLoggedIn())
  
  AuthenticationService.observeStatus(user => {
    setLogged(!!user)
  })

  return (
    <div className="App">
     
      { logged ? <Chat /> : <LoginTest /> }
    </div>
  );
}

export default App;
