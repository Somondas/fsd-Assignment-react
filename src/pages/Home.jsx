import React from "react";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <div className="w-full  h-full  p-4 ">
      <div className="w-full h-full border-2 border-gray-300 rounded-lg">
        <h1 className="font-semibold text-4xl capitalize m-4">
          Welcome, John Doe
        </h1>
      </div>
    </div>
  );
};

export default AppLayout()(Home);
