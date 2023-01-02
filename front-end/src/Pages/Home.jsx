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
