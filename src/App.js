import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment,log} from './actions/index.action'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <>
    <h1>Hello</h1>
    <h2>{counter}</h2>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>

    <button onClick={()=> dispatch(log())}>
   { isLogged?
      'Log Out':
      'Log In'}
    </button>


    {
      isLogged?
      <h1>Hello</h1>:
      <></>
    }
    </>  
  );
}

export default App;
