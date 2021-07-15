import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// import {createStore } from 'redux';

// //Store -> GLOBalized State

// //Action Increment
// const increment  =() =>{
//   return {
//     type: "INCREMENT"
//   }
// }

// const decrement  =() =>{
//   return {
//     type: "DECEREMENT"
//   }
// }

// //Reducer

// const counter = (state = 0 , action) =>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default :
//         return state;
//   }
// }

// let store = createStore(counter)

// //Display it in the console

// store.subscribe(() => console.log(store.getState()))

// //Dispatch

// store.dispatch(increment())

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/index'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





ReactDOM.render(
<Provider store ={store}>

<App />
</Provider>
,document.getElementById('root')
);

  