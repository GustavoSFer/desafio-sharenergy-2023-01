import MyContext from './MyContext/MyContext';
import Routers from './Routes';
import './App.css';

function App() {
  const MIN_PASSWORD_LANGTH = 5;

  const contextValue = {
    MIN_PASSWORD_LANGTH,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <Routers />
    </MyContext.Provider>
  );
}

export default App;
