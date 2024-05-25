import React, { createContext, useState, Dispatch, SetStateAction, useEffect, useContext} from 'react'

type BadContextProviderProps = {
  value: string,
  setValue: Dispatch<React.SetStateAction<string>> 
};

export const BadContext = createContext<BadContextProviderProps | null>(null); 


export const BadContextExample = () => {

  const [value, setValue] = useState("Test");

  return (
    <BadContext.Provider value={{
      value, 
      setValue
    }}>

        <div>BadContextExample</div>
        <Component1 />
        <Component2 />
    </BadContext.Provider>
    
  )
 
}
export const Component1 = () => {

  const context = useContext(BadContext);

  console.log(context?.value);

  useEffect(() => {

    console.log('Component1', context?.value)
  });

  return (
    <>
      Value: {context?.value}
      <button onClick={() => context?.setValue(context.value + " Hello")}>Click Me</button>
    </>
  )

}
export const Component2 = () => {

  useEffect(() => {

    console.log('Component2')
  });

  return (
    <>
      Component 2
    </>
  )
}
