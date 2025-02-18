import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageNames } from "src/components/Header";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import { updateCurrentScreen } from "src/helpers/updateCurrentScreen";
import {
  selectCurrentScreen,
  selectHeaderHeight,
} from "src/reducers/navigation";

type EducationProps = {
  scrollPosition: number;
};

const Education: React.FC<EducationProps> = ({ scrollPosition }) => {
  const ref = React.useRef(null);
  const { isIntersecting, intersectionRatio, screenYPosition } = useIsOnScreen(
    ref,
    scrollPosition
  );

  const currentScreen = useSelector(selectCurrentScreen);
  const headerHeight = useSelector(selectHeaderHeight);

  const dispatch = useDispatch();

  useEffect(() => {
    updateCurrentScreen({
      currentScreen,
      dispatch,
      headerHeight,
      isIntersecting,
      intersectionRatio,
      screenYPosition,
      screenToCheck: PageNames.EducationPage,
    });
  }, [currentScreen, dispatch, isIntersecting, scrollPosition]);

  return (
    <div
      id="EducationPage"
      className={`${PageNames.EducationPage} Page PageAlternateBackground`}
      ref={ref}
    >
      <div className="CircleBackground BottomCircle LightGrey" />

      <div className="PageTitle">Education</div>

      <div className="EducationTable BoxShadow">
        <div className="EducationItem">
          <div className="Date">Oct 2016 - Mar 2018</div>

          <div className="AwardedDate">(Awarded July 2018)</div>

          <div className="Degree">MSc. (by Research) Physics</div>

          <div className="University">The University of Warwick</div>

          <div className="Text">
            Thesis Title: "Wide Companions To Tycho-Gaia Stars"
          </div>
        </div>

        <div className="EducationItem">
          <div className="Date">Sept 2013 - Sept 2016</div>

          <div className="AwardedDate">(Awarded Nov 2016)</div>

          <div className="Degree">
            First Class (Hons), BSc. Applied Mathematics and Theoretical Physics
          </div>

          <div className="University">Coventry University</div>

          <div className="Text">Final Year Project: "Structure in Chaos"</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
