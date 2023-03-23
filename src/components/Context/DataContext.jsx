import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [buttonData,setButtonData] = useState('')
    const [bookMarkData,setBookMarkData] = useState([])
  return <DataContext.Provider value={{buttonData,setButtonData}}>
    {children}
    </DataContext.Provider>;
};
