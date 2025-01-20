import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageNames } from "src/components/Header";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import { selectCurrentScreen } from "src/reducers/navigation";
import { updateCurrentScreen } from "./Intro";

const Employment = () => {
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
      PageNames.EmploymentPage
    );
  }, [currentScreen, dispatch, isIntersecting]);

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
      </div>
    </div>
  );
};

export default Employment;
