import { useState } from "react";
import AppWindow from "./app-window.svg";
import ProjectTopView from "../../../components/projectTopView/ProjectTopView";
import ProjectClassification from "../../../composites/projectClassification/ProjectClassification";
import { Button } from "../../../components/ui/button";
import Easy from "../../../composites/easy/Easy";
import Medium from "../../../composites/medium/Medium";
import Hard from "../../../composites/Hard/Hard";
type Props = {};

const Project = (props: Props) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number): void => {
    setToggleState(index);
  };
  return (
    <div>
      <ProjectTopView />
      <div className=" bg-[#212530]">
        <ProjectClassification
          toggleState={toggleState}
          toggleTab={toggleTab}
        />

        {toggleState === 1 ? <Easy></Easy> : null}
        {toggleState === 2 ? <Medium></Medium> : null}
        {toggleState === 3 ? <Hard></Hard> : null}
      </div>
    </div>
  );
};

export default Project;
