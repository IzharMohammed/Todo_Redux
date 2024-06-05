import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/TodoReducer'

/*STORE AND COMBINED REDUCERS */

const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const combineReducer = combineReducers({ todo: todoReducer });

/* const initialState = {
    todo: todoReducer(undefined, {}), // Initialize with the reducer's initial state
  }; */

//const store = createStore(todoReducer,initialTodos,reduxDevToolEnhancer);
//               (OR)

const store = createStore(combineReducer, {}, reduxDevToolEnhancer);

export default store;