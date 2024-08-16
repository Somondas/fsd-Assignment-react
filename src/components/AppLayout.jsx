import React from "react";
import Heading from "./Heading";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";

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

            <div className="flex  items-center text-purple-600 text-lg font-semibold p-1">
              <WindowOutlinedIcon fontSize="medium" />
              <h2>Overview</h2>
            </div>
            <div className="flex  items-center text-purple-600 text-lg font-semibold p-1">
              <WindowOutlinedIcon fontSize="medium" />
              <h2>People Directory</h2>
            </div>
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
