import React from "react";
import AppWindow from "./app-window.svg";
type Props = {};

const Project = (props: Props) => {
  return (
    <div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-app-window"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M10 4v4" />
          <path d="M2 8h20" />
          <path d="M6 4v4" />
        </svg>
        <h1 className="text-2xl">PROJECTS</h1>
      </div>
    </div>
  );
};

export default Project;
