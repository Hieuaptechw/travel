import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router';
import { createContext, useMemo, useState } from 'react';

export let GlobalContext = createContext({
  user: null,
  setUser: null,
});

function App() {
  const [user, setUser] = useState(window.localStorage.getItem("user"));

  const globalValue = useMemo(() => ({
    user, setUser,
  }), [
    user, setUser,
  ]);

  return (
    <GlobalContext.Provider value={globalValue}>
      <BrowserRouter>
        <RouterCustom/>
      </BrowserRouter>  
    </GlobalContext.Provider> 
  );
}

export default App;
