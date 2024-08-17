import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import { data } from "../sampleData/sampleData";
import Search from "../components/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Add, Filter } from "@mui/icons-material";
import FullScreenModal from "../components/FullScreenModal";
import TableComponent from "../components/TableComponent";
const People = () => {
  return (
    <div className="w-full  h-full  p-4  overflow-x-hidden">
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
            <FullScreenModal />
          </div>
        </div>
        <TableComponent />
      </div>
    </div>
  );
};

export default AppLayout()(People);
