import React, { useReducer } from 'react';
import Counter from "./decrementFunction"
import reducer from "./reducer"

const initialState = {
  counter: 0
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{textAlign:"center"}}>
      <div>{state.counter}</div>
      <div><button onClick={() => dispatch({ type: 'incrementByFive', payload: state.counter })}>IncrementByFive</button></div>
      <div><button onClick={() => dispatch({ type: 'incrementByTen', payload: state.counter })}>IncrementByTen</button></div>
      <Counter/>
    </div>
  )
}

export {App};
