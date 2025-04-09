import  { createContext, useState, useEffect } from "react";
export const MyTheme = createContext();

export const ContextHookProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme && ["light", "dark"].includes(savedTheme)
        ? savedTheme
        : "light";
    } catch (error) {
      console.warn("Failed to access localStorage:", error);
      return "light";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.warn("Failed to save theme to localStorage:", error);
    }

    // Ensure theme value is valid before applying
    if (["light", "dark"].includes(theme)) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const themeContext = {
    theme,
    handleTheme,
  };

  return <MyTheme.Provider value={themeContext}>{children}</MyTheme.Provider>;
};
