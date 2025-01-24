import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageNames } from "src/components/Header";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import { updateCurrentScreen } from "src/helpers/updateCurrentScreen";
import {
  selectCurrentScreen,
  selectHeaderHeight,
} from "src/reducers/navigation";
import { PiCameraFill } from "react-icons/pi";

type InterestsAndActivitiesProps = {
  scrollPosition: number;
};

const InterestsAndActivities: React.FC<InterestsAndActivitiesProps> = ({
  scrollPosition,
}) => {
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
      screenToCheck: PageNames.InterestsAndActivitiesPage,
    });
  }, [currentScreen, dispatch, isIntersecting, scrollPosition]);

  return (
    <div
      id="InterestsAndActivitiesPage"
      className={`${PageNames.InterestsAndActivitiesPage} Page PageAlternateBackground`}
      ref={ref}
    >
      <div className="PageTitle">Interests And Activities</div>

      <div className="Interests">
        <div className="Interest">
          <div className="Dot">&#x2022;</div>

          <div className="Text">Films</div>
        </div>

        <div className="Interest">
          <div className="Dot">&#x2022;</div>

          <div className="Text">Photography</div>
        </div>

        <div className="Interest">
          <div className="Dot">&#x2022;</div>

          <div className="Text">Videography</div>
        </div>

        <div className="Interest">
          <div className="Dot">&#x2022;</div>

          <div className="Text">Drums</div>
        </div>

        <div className="Interest">
          <div className="Dot">&#x2022;</div>

          <div className="Text">Guitar</div>
        </div>

        <div className="Interest">
          <div className="Dot">&#x2022;</div>

          <div className="Text">Gaming</div>
        </div>

        <div className="Interest">
          <div className="Dot">&#x2022;</div>

          <div className="Text">Skateboarding</div>
        </div>

        <div className="Interest">
          <div className="Dot">&#x2022;</div>

          <div className="Text">Space</div>
        </div>
      </div>

      <div className="PhotographyPortfolio">
        <div className="Icon">
          <PiCameraFill />
        </div>

        <div className="Text">Photography portfolio:</div>

        <a href="https://www.conortalbot.com">https://www.conortalbot.com</a>
      </div>
    </div>
  );
};

export default InterestsAndActivities;
