import React, { ReactNode, createContext, useContext, useState } from 'react'

type Theme = "dark" | "light" | "system";

export const ThemeContext = createContext<Theme>("dark"); // We have put Theme type here because it is not an implicit type,\
// For implicit types like number or boolen, we don't need to specifiy it

export const ThemeContextProvider = ({children}: {children: ReactNode}) => {

   const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
    
  )
}

export const  useGetThemeContext = () => {

    let theme = useContext(ThemeContext);
    
    if(!theme){
        throw new Error("Context used outside provider");
    }
    return theme;
}