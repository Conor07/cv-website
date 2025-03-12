import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { scrollToElement } from "src/helpers/scrollToElement";
import {
  selectCurrentScreen,
  selectHeaderHeight,
  setHeaderHeight,
} from "src/reducers/navigation";

export enum PageNames {
  IntroPage = "IntroPage",
  EmploymentPage = "EmploymentPage",
  ComputerSkillsPage = "ComputerSkillsPage",
  EducationPage = "EducationPage",
  AwardsPage = "AwardsPage",
  InterestsAndActivitiesPage = "InterestsAndActivitiesPage",
  ReferencesPage = "ReferencesPage",
}

const Header = () => {
  const ref = React.useRef<any>(null);

  const dispatch = useDispatch();

  const currentScreen = useSelector(selectCurrentScreen);

  const activeScreen = (pageName: string) => {
    return (
      (currentScreen &&
        currentScreen.screen &&
        typeof currentScreen.screen === "string" &&
        currentScreen.screen === pageName) ??
      false
    );
  };

  const headerHeight = useSelector(selectHeaderHeight);

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.clientHeight ?? 0;

      if (height !== headerHeight) {
        dispatch(setHeaderHeight(height));
      }
    }
  }, [ref]);

  const headerPageOnClick = (pageName: string) => {
    scrollToElement(pageName);
  };

  return (
    <header className="Header" ref={ref}>
      <h1>Conor Talbot</h1>

      <div className="HeaderPages">
        <div
          className={`HeaderPage ${
            activeScreen(PageNames.IntroPage) ? "Active" : ""
          }`}
          onClick={() => headerPageOnClick(PageNames.IntroPage)}
        >
          <div className="Text">Intro</div>
        </div>

        <div
          className={`HeaderPage ${
            activeScreen(PageNames.EmploymentPage) ? "Active" : ""
          }`}
          onClick={() => headerPageOnClick(PageNames.EmploymentPage)}
        >
          <div className="Text">Employment</div>
        </div>

        <div
          className={`HeaderPage ${
            activeScreen(PageNames.ComputerSkillsPage) ? "Active" : ""
          }`}
          onClick={() => headerPageOnClick(PageNames.ComputerSkillsPage)}
        >
          <div className="Text">Computer Skills</div>
        </div>

        <div
          className={`HeaderPage ${
            activeScreen(PageNames.EducationPage) ? "Active" : ""
          }`}
          onClick={() => headerPageOnClick(PageNames.EducationPage)}
        >
          <div className="Text">Education</div>
        </div>

        <div
          className={`HeaderPage ${
            activeScreen(PageNames.AwardsPage) ? "Active" : ""
          }`}
          onClick={() => headerPageOnClick(PageNames.AwardsPage)}
        >
          <div className="Text">Awards</div>
        </div>

        <div
          className={`HeaderPage ${
            activeScreen(PageNames.InterestsAndActivitiesPage) ? "Active" : ""
          }`}
          onClick={() =>
            headerPageOnClick(PageNames.InterestsAndActivitiesPage)
          }
        >
          <div className="Text">Interests</div>
        </div>

        <div
          className={`HeaderPage ${
            activeScreen(PageNames.ReferencesPage) ? "Active" : ""
          }`}
          onClick={() => headerPageOnClick(PageNames.ReferencesPage)}
        >
          <div className="Text">References</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
