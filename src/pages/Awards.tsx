import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageNames } from "src/components/Header";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import { updateCurrentScreen } from "src/helpers/updateCurrentScreen";
import {
  selectCurrentScreen,
  selectHeaderHeight,
} from "src/reducers/navigation";
import { FaTrophy } from "react-icons/fa6";

type AwardsProps = {
  scrollPosition: number;
};

const Awards: React.FC<AwardsProps> = ({ scrollPosition }) => {
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
      screenToCheck: PageNames.AwardsPage,
    });
  }, [currentScreen, dispatch, isIntersecting, scrollPosition]);

  return (
    <div id="AwardsPage" className={`${PageNames.AwardsPage} Page`} ref={ref}>
      {/* <div className="CircleBackground RightCircle LightGrey" /> */}

      <div className="PageTitle">Awards</div>

      <div className="BoxShadow">
        <div className="Info">
          <div className="Icon">
            <FaTrophy />
          </div>

          <div className="Date">2016</div>

          <div className="Title">
            Institute of Mathematics and Its Applications Graduate Prize Winner
          </div>

          <div className="University">Coventry University</div>
        </div>
      </div>

      {/* <div className="AwardsTable BoxShadow">
        <div className="AwardsItem">
          <div className="Date">2016</div>

          <div className="Title">
            Institute of Mathematics and Its Applications Graduate Prize Winner
          </div>

          <div className="University">Coventry University</div>
        </div>
      </div> */}

      <div className="DiagonalSeparator NormalIntoBlue" />
    </div>
  );
};

export default Awards;
