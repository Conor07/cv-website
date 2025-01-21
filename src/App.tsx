import "src/styles/main.scss";

import React, { useEffect, useState } from "react";
import "./App.css";
import Intro from "./pages/Intro";
import Header from "./components/Header";
import Employment from "./pages/Employment";

import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Intro scrollPosition={scrollPosition} />

        <Employment scrollPosition={scrollPosition} />
      </div>
    </Provider>
  );
}

export default App;
