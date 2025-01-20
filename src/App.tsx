import "src/styles/main.scss";

import React from "react";
import "./App.css";
import Intro from "./pages/Intro";
import Header from "./components/Header";
import Employment from "./pages/Employment";

import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Intro />

        <Employment />
      </div>
    </Provider>
  );
}

export default App;
