import React, { useState } from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Input from '../Components/Input';
import { httpCats } from '../Services/Request';

function HttpCats() {
  const [statusHttp, setStatusSttp] = useState('');

  const handleClick = async () => {
    await httpCats(statusHttp);
  };

  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <Input
          type="text"
          name="Informe o Status Code Http"
          handleChange={(e) => setStatusSttp(e.target.value)}
          value={statusHttp}
        />
        <Button
          click={handleClick}
          dataTestId="btn-pesquisar"
        >
          Pesquisar
        </Button>
      </div>
      <img src="#" alt="imagem do http solicitado" />
    </div>
  );
}

export default HttpCats;
