import { useState, createContext } from "react";

const Context = createContext();

function NewProvider({children}) {

  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true)
  const [activeLink, setActiveLink] = useState('home');

  return(
    <Context.Provider value={{list, setList, loader, setLoader, activeLink, setActiveLink}}>
      {children}
    </Context.Provider>
  );
}

export {NewProvider, Context}