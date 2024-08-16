import React from "react";
import Heading from "./Heading";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import { Link } from "react-router-dom";

// >> tabs constant
const tabs = [
  {
    name: "Overview",
    path: "/",
  },
  {
    name: "People Directory",
    path: "/people",
  },
];
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Heading />
        <div
          className="grid grid-cols-12 "
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className=" col-span-2 p-4 ">
            {/* Navigation */}
            {tabs.map((tab) => (
              <Link className="text-gray-600" key={tab.path} to={tab.path}>
                <div
                  className={`flex  items-center 
                    ${
                      location.pathname === tab.path && "text-purple-600"
                    } text-lg font-semibold p-1`}
                >
                  <WindowOutlinedIcon fontSize="medium" />
                  <h2>{tab.name}</h2>
                </div>
              </Link>
            ))}
            <button></button>
          </div>
          <div className=" col-span-10">
            <WrappedComponent />
          </div>
        </div>
      </>
    );
  };
};

export default AppLayout;
