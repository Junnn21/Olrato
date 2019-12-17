import React from 'react';
import './App.css';
import Opening from './Component/Opening';
import LoginForm from './Component/LoginForm';

function App() {
  return (
    <div>
      <Opening>
        <LoginForm />  
      </Opening>  
    </div>
  );
}

export default App;
