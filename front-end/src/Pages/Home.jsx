import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RandonUsers from '../Components/RandonUsers';
import Search from '../Components/Search';
import { randonUser } from '../Services/Request';

function Home() {
  const [resultApi, setResultApi] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(resultApi.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = resultApi.slice(startIndex, endIndex);

  const api = async () => {
    const result = await randonUser(50);
    setResultApi(result);
  };

  useEffect(() => {
    api();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  return (
    <main className="container">
      <div>
        <Header />
      </div>
      <Search resultApi={resultApi} api={api} setResultApi={setResultApi} />
      <div className="d-flex justify-content-between mt-2">
        <div>Foto</div>
        <div>Nome</div>
        <div>email</div>
        <div>idade</div>
      </div>
      {
        resultApi.length > 0
        && (
          currentItens.map((item) => <RandonUsers key={item.email} user={item} />)
        )
      }
      <div className="text-center">
        {
          Array.from(Array(pages), (item, index) => (
            // eslint-disable-next-line react/button-has-type
            <button
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
              className="btn btn-primary m-1"
            >
              {index + 1}
            </button>
          ))
        }
      </div>

      <div className="text-end">
        <span className="col-9">Quantos itens por pagina gostaria de ver?</span>
        <select
          value={itensPerPage}
          onChange={(e) => setItensPerPage(Number(e.target.value))}
          className="m-2"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>

      <Footer />
    </main>
  );
}

export default Home;
