
import { useContext } from "react";
import { ThemeContextProvider, ThemeContext} from "./contexts/ThemeContext";

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

  const context = useContext(ThemeContext);
  return (
    <>
      This is another component using theme {context?.theme}
    </>
  )
}
export default AnotherApp;
