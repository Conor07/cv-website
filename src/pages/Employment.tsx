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
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
        <div className="EmploymentItem">
          <div className="Title">Employment Item 1</div>

          <div className="Date">1/1/2000 - 1/1/2020</div>

          <div className="Text">Text 1</div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
