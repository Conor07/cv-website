import "src/styles/main.scss";
import "src/styles/pages.scss";
import "src/styles/mediaQueries.scss";

import React, { useEffect, useState } from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Intro from "./pages/Intro";
import Header from "./components/Header";
import Employment from "./pages/Employment";
import ComputerSkills from "./pages/ComputerSkills";
import Education from "./pages/Education";
import Awards from "./pages/Awards";
import InterestsAndActivities from "./pages/InterestsAndActivities";
import References from "./pages/References";
import Footer from "./components/Footer";

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

        <ComputerSkills scrollPosition={scrollPosition} />

        <Education scrollPosition={scrollPosition} />

        <Awards scrollPosition={scrollPosition} />

        <InterestsAndActivities scrollPosition={scrollPosition} />

        <References scrollPosition={scrollPosition} />

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
