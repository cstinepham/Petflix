//React
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";



document.addEventListener("DOMContentLoaded", () => {

  
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to petflix!</h1>, root);
});
