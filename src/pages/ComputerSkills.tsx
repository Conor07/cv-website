import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageNames } from "src/components/Header";
import { useIsOnScreen } from "src/helpers/isOnScreen";
import { updateCurrentScreen } from "src/helpers/updateCurrentScreen";
import {
  selectCurrentScreen,
  selectHeaderHeight,
} from "src/reducers/navigation";
import {
  DiGithubBadge,
  DiReact,
  DiJavascript1,
  DiSqllite,
  DiPython,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { BiLogoTypescript } from "react-icons/bi";

type ComputerSkillsProps = {
  scrollPosition: number;
};

const ComputerSkills: React.FC<ComputerSkillsProps> = ({ scrollPosition }) => {
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
      screenToCheck: PageNames.ComputerSkillsPage,
    });
  }, [currentScreen, dispatch, isIntersecting, scrollPosition]);

  return (
    <div
      id="ComputerSkillsPage"
      className={`${PageNames.ComputerSkillsPage} Page`}
      ref={ref}
    >
      {/* <div className="CircleBackground RightCircle LightGrey" /> */}

      <div className="PageTitle">Computer Skills</div>

      <div className="ComputerSkillsTable BoxShadow">
        <div className="ArrowColumn">
          <div className="TopLevel">Intermediate</div>
          <div className="BottomLevel">Basic</div>

          <div className="Arrow">
            <div className="ArrowHead"></div>

            <div className="ArrowBody"></div>
          </div>
        </div>

        <div className="SkillsColumn">
          {/* Top Row: */}

          <div className="TopRow Row">
            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <DiHtml5 />
              </div>

              <div className="Skill">HTML</div>
            </div>

            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <DiCss3 />
              </div>

              <div className="Skill">CSS</div>
            </div>

            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <DiJavascript1 />
              </div>

              <div className="Skill">Javascript</div>
            </div>

            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <DiReact />
              </div>
              <div className="Skill">React</div>
            </div>

            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <DiGithubBadge />
              </div>

              <div className="Skill">Git</div>
            </div>
          </div>

          {/* Middle Row: */}
          <div className="MiddleRow Row">
            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <BiLogoTypescript />
              </div>

              <div className="Skill">Typescript</div>
            </div>

            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <DiPython />
              </div>

              <div className="Skill">Python</div>
            </div>

            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <PiMicrosoftExcelLogoFill />
              </div>

              <div className="Skill">Microsoft Office</div>
            </div>
          </div>

          {/* Bottom Row: */}
          <div className="BottomRow Row">
            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <DiReact />
              </div>

              <div className="Skill">React Native</div>
            </div>

            <div className="SkillItem">
              <div className="Dot">&#x2022;</div>

              <div className="Icon">
                <DiSqllite />
              </div>

              <div className="Skill">SQL</div>
            </div>
          </div>
        </div>
      </div>

      <div className="DiagonalSeparator RightSeparator NormalIntoBlue" />
    </div>
  );
};

export default ComputerSkills;
