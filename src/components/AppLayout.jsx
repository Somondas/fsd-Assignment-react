import React from "react";
import Heading from "./Heading";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Heading />
        <div
          className="grid grid-cols-12 "
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className=" col-span-2">hello</div>
          <div className=" col-span-10">
            <WrappedComponent />
          </div>
        </div>
      </>
    );
  };
};

export default AppLayout;
