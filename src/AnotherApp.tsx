
import { useContext } from "react";
import { useGetThemeContext,  ThemeContextProvider, ThemeContext} from "./contexts/ThemeContext";

function AnotherApp() {

  return (
    
    <ThemeContextProvider>
      <>
      This is a component
      <OneMoreComponent />

    </>

    </ThemeContextProvider>
    
  );
}

export const OneMoreComponent = () => {

  const theme = useContext(ThemeContext);
  return (
    <>
      <div>This is another component using {theme} theme</div>
    </>
  )
}
export default AnotherApp;
