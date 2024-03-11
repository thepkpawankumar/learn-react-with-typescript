import { useState } from "react";

type ButtonExampleProps =  {
    title: string,
    disabled?: boolean
};

export const ButtonExample = ({title}: ButtonExampleProps) => {

    const [disabled, setDisabled] = useState<boolean>(false)

  return (
    <div>
        <h2>Button Toggle Example:</h2>
        <div><button disabled={disabled}>{title}</button></div>
       <button onClick={() => {setDisabled(!disabled)}}>Toggle</button>
    </div>
  )
}