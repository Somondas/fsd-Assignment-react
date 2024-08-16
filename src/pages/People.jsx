import React from "react";
import AppLayout from "../components/AppLayout";
import { data } from "../sampleData/sampleData";
import Search from "../components/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Add, Filter } from "@mui/icons-material";
const People = () => {
  return (
    <div className="w-full  h-full  p-4 ">
      <div className="w-full h-full border-2  rounded-lg">
        <div className=" px-6  w-full h-16 border-b-2 flex justify-between items-center">
          <div className=" flex items-center space-x-4">
            <h1 className="font-semibold text-xl ">Team Member</h1>
            <span className="text-violet-700">{data.length} users </span>
          </div>
          <div className="flex space-x-2 ">
            <Search />
            <button className="font-light  text-gray-900 text-3xl">
              <FilterAltOutlinedIcon fontSize="inherit" />
            </button>
            <button className=" flex items-center bg-violet-600 px-4 py-2 rounded-md text-white text-md font-semibold uppercase">
              <Add /> <span className="pl-2">Add Member</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout()(People);
