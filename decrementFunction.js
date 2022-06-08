import React, { useReducer } from 'react';
import reducer from "./reducer"

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {counter :0});
    return (
      <div>
        <div>{state.counter}</div>
        <div><button onClick={() => dispatch({ type: 'decrementByFive', payload: state.counter })}>DecrementByFive</button></div>
        <div><button onClick={() => dispatch({ type: 'decrementByTen', payload: state.counter })}>DecrementByTen</button></div>
      </div>
    )
  }

export default Counter