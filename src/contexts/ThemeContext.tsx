import React, { 
  ReactNode, 
  createContext, 
  useContext, 
  useState,
  Dispatch,
  SetStateAction
 } from 'react'

type Theme = "dark" | "light" | "system";

type ThemeContextProps = {
  theme: Theme,
  setTheme: Dispatch<React.SetStateAction<Theme>> 
}
export const ThemeContext = createContext<ThemeContextProps | null>(null); // We have put Theme type here because it is not an implicit type,\
// For implicit types like number or boolen, we don't need to specifiy it

export const ThemeContextProvider = ({children}: {children: ReactNode}) => {

   const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
    
  )
}

export const  useGetThemeContext = () => {

    let context = useContext(ThemeContext);
    
    if(!context){
        throw new Error("Context used outside provider");
    }
    return context;
}