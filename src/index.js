import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/store";
import App from "./App";

// import { myAction } from './redux/contacts/contacts-actions';
import { Provider } from "react-redux";
// import { BrowserRouter } from 'react-router-dom';
// console.log(store);
// console.log(store.getState);
// store.dispatch(myAction(5));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
