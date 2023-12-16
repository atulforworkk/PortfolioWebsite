import React from "react";
import AppWindow from "./app-window.svg";
import ProjectTopView from "../../../components/projectTopView/ProjectTopView";
import ProjectClassification from "../../../composites/projectClassification/ProjectClassification";
type Props = {};

const Project = (props: Props) => {
  return (
    <div>
      <ProjectTopView />
      <ProjectClassification />
    </div>
  );
};

export default Project;
