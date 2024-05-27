import React, { createContext, useState, Dispatch, SetStateAction, useEffect, useContext} from 'react'

type BadContextProviderProps = {
  value: string,
  setValue: Dispatch<React.SetStateAction<string>> 
};

export const BadContext = createContext<BadContextProviderProps | null>(null); 

/**
 * This is bad context example as you can see here, I have used useContext() only in component 1 and when i click, button
 * in component 1 then component 2 is also rendering, which is wrong
 * To overcome it, context should be created like in authcontext 
 * Using a component and children as props
 */
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
