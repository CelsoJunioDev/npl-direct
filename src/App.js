import { useEffect } from 'react';
import './App.css';
import messaging from './services/messaging'
import auth from './services/authentication'

function App() {

  messaging.getMessages()
  
  function login(){
    auth.loginWithGoogle()
  }


   
  
  return (
    <div className="App">
      <header className="App-header">
       
        <button onClick={() => login()}>Login</button>
      </header>
    </div>
  );
}

export default App;
