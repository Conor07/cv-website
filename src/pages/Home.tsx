import React from "react";
import Intro from "./Intro";
import Employment from "./Employment";
import ComputerSkills from "./ComputerSkills";
import Education from "./Education";
import Awards from "./Awards";
import InterestsAndActivities from "./InterestsAndActivities";
import References from "./References";

type ReactProps = {
  scrollPosition: number;
};

const Home: React.FC<ReactProps> = ({ scrollPosition }) => {
  return (
    <div className="Home">
      <Intro scrollPosition={scrollPosition} />

      <Employment scrollPosition={scrollPosition} />

      <ComputerSkills scrollPosition={scrollPosition} />

      <Education scrollPosition={scrollPosition} />

      <Awards scrollPosition={scrollPosition} />

      <InterestsAndActivities scrollPosition={scrollPosition} />

      <References scrollPosition={scrollPosition} />
    </div>
  );
};

export default Home;
