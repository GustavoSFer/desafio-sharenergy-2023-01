import React, { useEffect, useState } from 'react';
import RandonUsers from '../Components/RandonUsers';
import randonUser from '../Services/Request';

function Home() {
  const [resultApi, setResultApi] = useState([]);

  const api = async () => {
    const result = await randonUser(50);
    setResultApi(result);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <main>
      <div className="d-flex justify-content-between container mt-2">
        <div>Foto</div>
        <div>Nome</div>
        <div>email</div>
        <div>idade</div>
      </div>
      {
        resultApi.length > 0
        && (
          resultApi.map((item) => <RandonUsers user={item} key={item.email} />)
        )
      }
    </main>
  );
}

export default Home;
