
import React from "react";
import Search from "./pages/Search/";
import { store } from "./redux";
import { Provider } from "react-redux";
import "./App.css";


export default function App() {
  return (
    <Provider store={store}>
      <div  className="App">
          <Search  />
      </div>
    </Provider>
  );
}
