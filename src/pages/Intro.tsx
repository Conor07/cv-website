import React, { useEffect } from "react";
import profilePicture from "src/images/profile_picture.jpg";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import {
  CurrentScreen,
  navigationSlice,
  selectCurrentScreen,
} from "src/reducers/navigation";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { useDispatch } from "react-redux";
import { setCurrentScreen } from "src/reducers/navigation";
import { PageNames } from "src/components/Header";

export const updateCurrentScreen = (
  currentScreen: CurrentScreen,
  dispatch: React.Dispatch<any>,
  isIntersecting: boolean,
  intersectionRatio: number | null,
  screenToCheck: string
) => {
  if (
    isIntersecting &&
    intersectionRatio &&
    intersectionRatio > currentScreen.intersectionRatio
  ) {
    dispatch(
      setCurrentScreen({
        currentScreen: screenToCheck,
        currentScreenIntersectionRatio: intersectionRatio,
      })
    );
  } else if (
    currentScreen &&
    currentScreen.screen &&
    currentScreen.screen === screenToCheck &&
    !isIntersecting
  ) {
    dispatch(setCurrentScreen(null));
  }
};

const Intro = () => {
  const ref = React.useRef(null);
  const { isIntersecting, intersectionRatio } = useIsOnScreen(ref);

  const currentScreen = useSelector(selectCurrentScreen);

  const dispatch = useDispatch();

  useEffect(() => {
    updateCurrentScreen(
      currentScreen,
      dispatch,
      isIntersecting,
      intersectionRatio,
      PageNames.IntroPage
    );
  }, [currentScreen, dispatch, isIntersecting]);

  return (
    <div id="IntroPage" className="IntroPage Page" ref={ref}>
      <h1>Conor Talbot</h1>

      <h2>Frontend Developer</h2>

      <img src={profilePicture} alt="profile pic" className="ProfilePicture" />
    </div>
  );
};

export default Intro;
