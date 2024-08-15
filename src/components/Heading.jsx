import { NotificationAddRounded } from "@mui/icons-material";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Heading = () => {
  return (
    <>
      <div
        className="w-full h-[4rem] px-7
      items-center flex justify-between
      shadow-[0_1px_6px_rgba(0,0,0,0.3)]"
      >
        <h1 className="font-bold uppercase text-4xl text-violet-800">
          people.co
        </h1>
        <div className="flex items-center space-x-4 ">
          <button className="text-gray-400">
            <NotificationsNoneOutlinedIcon />
          </button>
          <img
            className="w-11 h-11 rounded-full"
            src="https://avatars.githubusercontent.com/u/1774007"
            alt=""
          />
          <p className="font-light text-gray-700 ">John Doe</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
