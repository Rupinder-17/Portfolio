import React, { createContext, useState } from "react";
export const MyTheme = createContext();

export const ContextHookProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  const handleTheme = () => {
    setTheme((prev) => !prev);
  };
  const ThemeChnage = {
    theme,
    handleTheme,
    color: {
      background: theme ? "black" : "white",
      color: theme ? "white" : "black",
    },
  };
  return (
    <div>
      <MyTheme.Provider value={ThemeChnage}>{children}</MyTheme.Provider>
    </div>
  );
};
