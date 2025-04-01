import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageNames } from "src/components/Header";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import { updateCurrentScreen } from "src/helpers/updateCurrentScreen";
import {
  selectCurrentScreen,
  selectHeaderHeight,
} from "src/reducers/navigation";
import { PiCameraFill, PiVideoCameraFill, PiPlanetFill } from "react-icons/pi";
import { TbSkateboard } from "react-icons/tb";
import { GiDrumKit } from "react-icons/gi";
import { FaMouse, FaGuitar } from "react-icons/fa";
import { RiFilmFill, RiSwordFill } from "react-icons/ri";

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
      className={`${PageNames.InterestsAndActivitiesPage} Page PageBlueBackground`}
      ref={ref}
    >
      {/* <div className="CircleBackground LeftCircle LightGrey" /> */}

      <div className="PageTitle">Interests and Activities</div>

      <div className="Interests BoxShadow">
        <div className="Interest">
          <div className="Icon">
            <RiFilmFill />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Films</div>
        </div>

        <div className="Interest">
          <div className="Icon">
            <PiCameraFill />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Photography</div>
        </div>

        <div className="Interest">
          <div className="Icon">
            <PiVideoCameraFill />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Videography</div>
        </div>

        <div className="Interest">
          <div className="Icon">
            <GiDrumKit strokeWidth={10} />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Drums</div>
        </div>

        <div className="Interest">
          <div className="Icon">
            <FaGuitar />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Guitar</div>
        </div>

        <div className="Interest">
          <div className="Icon">
            <FaMouse />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Gaming</div>
        </div>

        <div className="Interest">
          <div className="Icon">
            <TbSkateboard strokeWidth={2} />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Skateboarding</div>
        </div>

        <div className="Interest">
          <div className="Icon">
            <PiPlanetFill />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Space</div>
        </div>

        <div className="Interest">
          <div className="Icon">
            <RiSwordFill />
          </div>

          {/* <div className="Dot">&#x2022;</div> */}

          <div className="Text">Warhammer</div>
        </div>
      </div>

      <div className="PhotographyPortfolio">
        <div className="Icon">
          <PiCameraFill />
        </div>

        <div className="Text">Photography portfolio:</div>

        <a href="https://www.conortalbot.com">https://www.conortalbot.com</a>
      </div>

      <div className="DiagonalSeparator Grey" />
    </div>
  );
};

export default InterestsAndActivities;
