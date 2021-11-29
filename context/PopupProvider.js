import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [value, setValue] = useState();
  const path = useRouter().asPath;
  useEffect(() => {
    setValue(null);
  }, [path]);

  return (
    <PopupContext.Provider value={{ value, setValue }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
