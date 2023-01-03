import React, { useEffect, useState } from 'react';
import RandonUsers from '../Components/RandonUsers';
import randonUser from '../Services/Request';
import Input from '../Components/Input';
import Button from '../Components/Button';

function Home() {
  const [resultApi, setResultApi] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const pages = Math.ceil(resultApi.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = resultApi.slice(startIndex, endIndex);

  const api = async () => {
    const result = await randonUser(50);
    setResultApi(result);
  };

  const getRadioSelected = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    api();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  const handleClick = (typ) => {
    if (typ === 'name') {
      const filtro = [...resultApi].filter((item) => (
        item.name.first.includes(search)
      ));
      setResultApi(filtro);
      setSearch('');
    } else if (typ === 'email') {
      const filtro = [...resultApi].filter((item) => (
        item.email.first.includes(search)
      ));
      setResultApi(filtro);
      setSearch('');
    } else {
      api();
      setSearch('');
    }
  };

  return (
    <main className="container">
      <div className="d-flex justify-content-between mb-4">
        <Input
          type="text"
          name="Pesquisar por nome ou e-mail"
          handleChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="m-2" onChange={(e) => getRadioSelected(e)}>
          <label htmlFor="name">
            <input
              type="radio"
              id="name"
              name="radioButton"
              className="form-check-input"
              defaultChecked={type === 'name'}
              value="name"
            />
            Nome
          </label>
          <label htmlFor="email">
            <input
              type="radio"
              id="email"
              name="radioButton"
              className="form-check-input"
              defaultChecked={type === 'email'}
              value="email"
            />
            E-mail
          </label>
          <label htmlFor="clear">
            <input
              type="radio"
              id="clear"
              name="radioButton"
              className="form-check-input"
              defaultChecked={type === 'clear'}
              value="clear"
            />
            Limpar filtro
          </label>
        </div>
        <Button click={() => handleClick(type)} dataTestId="btn-pesquisar">Pesquisar</Button>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <div>Foto</div>
        <div>Nome</div>
        <div>email</div>
        <div>idade</div>
      </div>
      {
        resultApi.length > 0
        && (
          currentItens.map((item) => <RandonUsers user={item} key={item.email} />)
        )
      }
      <div>
        {
          Array.from(Array(pages), (item, index) => (
            // eslint-disable-next-line react/button-has-type
            <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>
              {index + 1}
            </button>
          ))
        }
      </div>

      <div>
        <span>Quantos itens por pagina gostaria de ver?</span>
        <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
    </main>
  );
}

export default Home;
