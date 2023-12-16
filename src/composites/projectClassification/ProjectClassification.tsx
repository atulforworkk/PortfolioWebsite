import React from "react";
import { Button } from "../../components/ui/button";

type Props = {};

const ProjectClassification = (props: Props) => {
  return (
    <div className="flex justify-center items-center   bg-[#212530]  my-8">
      <button>Easy </button>
      <buttonn>Medium </buttonn>
      <Button>Hard </Button>
    </div>
  );
};

export default ProjectClassification;
