import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Services';
import Input from '../Components/Input';
import Button from '../Components/Button';
import MyContext from '../MyContext/MyContext';
import {
  isValidEmail,
  isValidPassword,
  isValidName,
  confirmPassword,
} from '../Util/Validacao';

function Cadastro() {
  const history = useNavigate();
  const {
    MIN_PASSWORD_LANGTH,
    email, setEmail,
    userName, setUserName,
    password, setPassword,
    confirmePassword, setConfirmePassword,
  } = useContext(MyContext);

  const [msgErro, setMsgErro] = useState(false);

  const clearForm = () => {
    setEmail('');
    setUserName('');
    setPassword('');
    setConfirmePassword('');
    setMsgErro('');
  };

  const handleClick = async () => {
    if (
      isValidEmail(email)
      && isValidPassword(password, MIN_PASSWORD_LANGTH)
      && isValidName(userName)
      && confirmPassword(password, confirmePassword)
    ) {
      try {
        const body = { userName, password };
        const login = await createUser('/user/create', body);
        localStorage.setItem('user', JSON.stringify(login));
        clearForm();
        setMsgErro(false);
        history('/home');
      } catch (error) {
        setMsgErro(error);
      }
    } else {
      setMsgErro(true);
    }
  };

  return (
    <main className="text-center morgin-auto border border-primary login">
      <div className="m-2">
        <div className="color-form">
          <h1>Crie sua conta</h1>
          <Input
            type="text"
            name="E-mail"
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            type="text"
            name="User Name"
            handleChange={(e) => setUserName(e.target.value)}
            value={userName}
          />

          <Input
            type="password"
            name="Senha"
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <p className="min-password text-end">
            {`Caracteres minimo para senha: ${MIN_PASSWORD_LANGTH}`}
          </p>

          <Input
            type="password"
            name="Confirme sua senha"
            handleChange={(e) => setConfirmePassword(e.target.value)}
            value={confirmePassword}
          />

          {
              msgErro
                && <p className="text-danger">Dados incorreto! Verificar todos os campos.</p>
            }

          <Button click={handleClick} sty="w-100" dataTestId="btn-entrar">SALVAR</Button>
        </div>
      </div>
    </main>

  );
}

export default Cadastro;
