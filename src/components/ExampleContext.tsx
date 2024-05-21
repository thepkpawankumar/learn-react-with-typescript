import React, { createContext, useContext, useState } from 'react'

type Props = {}

type Theme = "dark" | "light" | "system";

const ThemeContext = createContext("system");

const useGetTheme = () => useContext(ThemeContext);

export const ExampleContext = (props: Props) => {

   const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider value={theme}>

       <div>Theme: {theme}</div>

    </ThemeContext.Provider>
  )
}