import React, { useReducer } from 'react'

interface State {

    count: number
};

type CounterAction = 
| { type : "reset"}
| { type: "setCount", value: State["count"]};


const intialState: State = {count: 0};

function stateReducer(state: State, action: CounterAction): State{

    switch(action.type) {

        case "reset": 

        return intialState;

        case "setCount": 

        return {...state, count: action.value}

        default:
            throw new Error("Unknown action");

    }

}
export const ReducerExample = () => {

    const [state, dispatch] = useReducer(stateReducer, intialState);

    const addFive = () => dispatch({type : "setCount", value: state.count + 5});
    const reset = () => dispatch({type: "reset"});
    
  return (
    <div>

        <h2>Reducer Example: </h2>
        <div>
            <button onClick={addFive}>Add 5</button>
            <button onClick={reset}>Reset</button>
        </div>

        <div>Count: {state.count}</div>

    </div>
  )
}
