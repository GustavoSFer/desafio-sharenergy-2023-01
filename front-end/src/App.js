import React, { useState } from 'react';
import MyContext from './MyContext/MyContext';
import Routers from './Routes';
import './App.css';

function App() {
  const MIN_PASSWORD_LANGTH = 5;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmePassword, setConfirmePassword] = useState('');
  const [msgErro, setMsgErro] = useState(false);

  const clearForm = () => {
    setEmail('');
    setName('');
    setPassword('');
    setConfirmePassword('');
  };

  const contextValue = {
    MIN_PASSWORD_LANGTH,
    email, setEmail,
    name, setName,
    password, setPassword,
    confirmePassword, setConfirmePassword,
    clearForm,
    msgErro, setMsgErro,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <div className="bg-dark-subtle">
        <Routers />
      </div>
    </MyContext.Provider>
  );
}

export default App;
