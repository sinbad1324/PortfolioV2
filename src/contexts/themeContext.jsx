import { createContext, useCallback, useContext, useState } from "react";

const themeContext = createContext(); // On créé un nouveaux contex pour rendre le theme du site global
/**
 * Ici on return un Context.provider le but c'est de partager le theme a tout ces utilisateur
 * on me le context en global pour tout le monde
 * en suit on passe un usecontext qui permet d'avoir la function ChangeTheme et puis theme pour pouvoir changer
 * @param {*} param0 children elemnts
 */
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.theme ?? "dark");
  const ChangeTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const newtheme = currentTheme === "dark" ? "light" : "dark";
      if (document.body.classList.contains(currentTheme))
        document.body.classList.remove(currentTheme);
      document.body.classList.add(newtheme);
      localStorage.theme = newtheme;
      return newtheme;
    });
  }, []);

  return (
    <themeContext.Provider value={{ theme, ChangeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

/**
 * ici  theme valeur acctuel et changeTheme pour changer le theme
 * en suit on passe un usecontext qui permet d'avoir la function ChangeTheme et puis theme pour pouvoir changer
 
* @returns {theme,ChangeTheme}
 *
 */
const useTheme = () => {
  return useContext(themeContext);
};

export { ThemeProvider, useTheme };
