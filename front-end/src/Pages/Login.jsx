import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { loginUser } from '../Services';

function Login() {
  const history = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msgErro, setMsgErro] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      history('/home');
    }
  }, []);

  const handleClick = async () => {
    try {
      const body = { userName, password };
      const setLogin = await loginUser('/user', body);
      setMsgErro('');
      localStorage.setItem('user', JSON.stringify(setLogin));
      history('/home');
    } catch (error) {
      setMsgErro(error);
    }
  };

  return (
    <main className="text-center morgin-auto container mt-4">
      <div className="col color-form border border-primary login">
        <div>
          <Input
            type="text"
            name="User Name"
            handleChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <Input
            type="password"
            name="Password"
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button click={handleClick} sty="w-100" dataTestId="btn-entrar">Entrar</Button>
          { msgErro && <p className="text-danger">Usuário ou senha incorreto!</p> }
        </div>
        <p className="mt-5">
          Não tem uma conta?
          <Link to="/cadastro" className="ms-3">Registre-se</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
