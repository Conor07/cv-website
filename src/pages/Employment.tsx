import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageNames } from "src/components/Header";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import { updateCurrentScreen } from "src/helpers/updateCurrentScreen";
import {
  selectCurrentScreen,
  selectHeaderHeight,
} from "src/reducers/navigation";

type EmploymentProps = {
  scrollPosition: number;
};

const Employment: React.FC<EmploymentProps> = ({ scrollPosition }) => {
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
      screenToCheck: PageNames.EmploymentPage,
    });
  }, [currentScreen, dispatch, isIntersecting, scrollPosition]);

  return (
    <div
      id="EmploymentPage"
      className={`${PageNames.EmploymentPage} Page PageAlternateBackground`}
      ref={ref}
    >
      <div className="PageTitle">Employment</div>

      <div className="EmploymentTable">
        <div className="EmploymentItem">
          <div className="Date">Nov 2021 - Dec 2024</div>

          <div className="Title">
            Senior Software Engineer and Software Engineer
          </div>

          <div className="Company">AVAMAE Software Solutions Ltd.</div>

          <div className="Text">Frontend Developer</div>
        </div>

        <div className="EmploymentItem">
          <div className="Date">Apr 2018 - May 2020</div>

          <div className="Title">
            Mid Level Developer and Junior Developer in Machine Learning
          </div>

          <div className="Company">RedBrain Ltd.</div>

          <div className="Text">Machine Learning Developer</div>
        </div>

        <div className="EmploymentItem">
          <div className="Date">May 2015 - Aug 2015</div>

          <div className="Title">Summer Research Intern</div>

          <div className="Company">Coventry University</div>

          <div className="Text">Research Intern</div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
