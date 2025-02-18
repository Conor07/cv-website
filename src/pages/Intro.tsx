import React, { useEffect } from "react";
import profilePicture from "src/images/profile_picture.jpg";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import {
  CurrentScreen,
  navigationSlice,
  selectCurrentScreen,
  selectHeaderHeight,
} from "src/reducers/navigation";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { useDispatch } from "react-redux";
import { setCurrentScreen } from "src/reducers/navigation";
import { PageNames } from "src/components/Header";
import { updateCurrentScreen } from "src/helpers/updateCurrentScreen";

type IntroProps = {
  scrollPosition: number;
};

const Intro: React.FC<IntroProps> = ({ scrollPosition }) => {
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
      screenToCheck: PageNames.IntroPage,
    });
  }, [currentScreen, dispatch, isIntersecting, scrollPosition]);

  return (
    <div id="IntroPage" className="IntroPage Page" ref={ref}>
      <h1>Conor Talbot</h1>

      <h2>Frontend Developer</h2>

      <img
        src={profilePicture}
        alt="profile pic"
        className="ProfilePicture BoxShadow NoBackground"
      />
    </div>
  );
};

export default Intro;
