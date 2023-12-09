import React from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="h-[10vh] flex items-center justify-between">
      <div className="flex items-center   ">
        <h1 className="text-2xl font-semibold px-4">
          <Link to="/">Atul Tiwari</Link>
        </h1>
        <h3 className="text-xl pt-1 pl-4  text-gray-300">
          <Link to="/projects">Projects</Link>
        </h3>
      </div>
      <div className="px-6">
        <button className="flex">
          Hire Me <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Header;
