import React from "react";
import { Button } from "../../components/ui/button";

type Props = {
  toggleState: number;
  toggleTab: (index: number) => void;
};

const ProjectClassification = ({ toggleState, toggleTab }: Props) => {
  return (
    <div className="flex justify-center items-center   bg-[#212530]  my-8">
      {toggleState === 1 ? (
        <Button
          variant={"class"}
          className="bg-green-500"
          onClick={() => toggleTab(1)}
        >
          EASY
        </Button>
      ) : (
        <Button variant={"class"} onClick={() => toggleTab(1)}>
          EASY
        </Button>
      )}
      {toggleState === 2 ? (
        <Button
          variant={"class"}
          className="bg-green-500"
          onClick={() => toggleTab(2)}
        >
          MEDIUM
        </Button>
      ) : (
        <Button variant={"class"} onClick={() => toggleTab(2)}>
          MEDIUM
        </Button>
      )}
      {toggleState === 3 ? (
        <Button
          variant={"class"}
          onClick={() => toggleTab(3)}
          className="bg-green-500"
        >
          HARD
        </Button>
      ) : (
        <Button variant={"class"} onClick={() => toggleTab(3)}>
          HARD
        </Button>
      )}
    </div>
  );
};

export default ProjectClassification;
