import "src/styles/main.scss";
import "src/styles/pages.scss";
import "src/styles/mediaQueries.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./pages/Home";

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
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/">
              <Home scrollPosition={scrollPosition} />
            </Route>
          </Routes>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
