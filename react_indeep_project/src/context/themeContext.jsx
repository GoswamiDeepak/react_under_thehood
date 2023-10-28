import React, { createContext, useContext, useEffect, useState } from "react";

const themeContextExpose = createContext();

const ThemeContext = ({ children }) => {
  const [mode, setMode] = useState(true);
  const [type, setType] = useState("light");

  function changeMode() {
    setMode(!mode);
    configType();
  }

  function configType() {
    if (!mode) {
      setType("dark");
    } else {
      setType("light");
    }
  }

  useEffect(()=>{
    // console.log(mode);
    if (mode) {
        setType("light");
      } else {
        setType("dark");
      }
  },[changeMode])

  
  return (
    <themeContextExpose.Provider value={{ mode, changeMode, type }}>
      {children}
    </themeContextExpose.Provider>
  );
};

export const themeProvider = () => {
  return useContext(themeContextExpose);
};

export default ThemeContext;
