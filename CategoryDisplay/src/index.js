import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"; 
import allReducers from "./reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { getCategoriesAsync } from './thunks/categoriesThunk.js';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, allReducers)
 
let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);
store.dispatch(getCategoriesAsync);

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <App />
       </PersistGate>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// const myStore = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
// myStore.dispatch(getCategoriesAsync);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={myStore}>
//       <App/>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
