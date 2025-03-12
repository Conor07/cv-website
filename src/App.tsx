import "src/styles/main.scss";
import "src/styles/pages.scss";
import "src/styles/mediaQueries.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home scrollPosition={scrollPosition} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
