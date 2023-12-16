import React from "react";

type Props = {};

const ProjectTopView = (props: Props) => {
  return (
    <div className="flex justify-center items-center ">
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
        className="lucide lucide-app-window "
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 4v4" />
        <path d="M2 8h20" />
        <path d="M6 4v4" />
      </svg>
      <h1 className="text-2xl px-4 font-semibold underline underline-offset-4">
        PROJECTS
      </h1>
    </div>
  );
};

export default ProjectTopView;
