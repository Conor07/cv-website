import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageNames } from "src/components/Header";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import { updateCurrentScreen } from "src/helpers/updateCurrentScreen";
import {
  selectCurrentScreen,
  selectHeaderHeight,
} from "src/reducers/navigation";

type ReferencesProps = {
  scrollPosition: number;
};

const References: React.FC<ReferencesProps> = ({ scrollPosition }) => {
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
      screenToCheck: PageNames.ReferencesPage,
    });
  }, [currentScreen, dispatch, isIntersecting, scrollPosition]);

  return (
    <div
      id="ReferencesPage"
      className={`${PageNames.ReferencesPage} Page`}
      ref={ref}
    >
      <div className="PageTitle">References Available Upon Request</div>
    </div>
  );
};

export default References;
