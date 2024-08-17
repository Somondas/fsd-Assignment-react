import React from "react";
import AppLayout from "../components/AppLayout";

const Home = () => {
  // ! The site is not for small screens
  return (
    <div className="w-full  h-full  p-4 ">
      <div className="w-full h-full border-2 rounded-lg">
        <h1 className="font-semibold text-4xl capitalize m-4">
          Welcome, John Doe
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default AppLayout()(Home);
