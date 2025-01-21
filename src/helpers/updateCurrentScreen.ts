import { CurrentScreen, setCurrentScreen } from "src/reducers/navigation";

export type UpdateCurrentScreen = {
  currentScreen: CurrentScreen;
  dispatch: React.Dispatch<any>;
  headerHeight: number;
  isIntersecting: boolean;
  intersectionRatio: number | null;
  screenYPosition: number | null;
  screenToCheck: string;
};

export const updateCurrentScreen = (props: UpdateCurrentScreen) => {
  const {
    currentScreen,
    dispatch,
    headerHeight,
    isIntersecting,
    intersectionRatio,
    screenYPosition,
    screenToCheck,
  } = props;

  if (
    isIntersecting &&
    screenYPosition &&
    screenYPosition > headerHeight &&
    (currentScreen.screenYPosition === -1 ||
      screenYPosition < currentScreen.screenYPosition)
  ) {
    dispatch(
      setCurrentScreen({
        currentScreen: screenToCheck,
        currentScreenIntersectionRatio: intersectionRatio ?? 0,
        currentScreenYPosition: screenYPosition ?? -1,
      })
    );
  } else if (
    currentScreen &&
    currentScreen.screen &&
    currentScreen.screen === screenToCheck &&
    (!isIntersecting ||
      (screenYPosition !== null && screenYPosition < headerHeight))
  ) {
    dispatch(setCurrentScreen(null));
  }
};
