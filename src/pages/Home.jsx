import React from "react";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <div className="w-full  h-full  p-4 ">
      <div className="w-full h-full border-2 border-gray-300 rounded-lg"></div>
    </div>
  );
};

export default AppLayout()(Home);
