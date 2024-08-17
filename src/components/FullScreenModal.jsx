import { Add } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { data } from "../sampleData/sampleData";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const FullScreenModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Function to handle clicks outside the dialog box
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };
  // -> handleFileChange
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };
  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className=" flex items-center bg-violet-600 px-4 py-2  rounded-md text-white text-md font-semibold uppercase"
      >
        <Add /> <span className="pl-2">Add Member</span>
      </button>

      {/* Full screen modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg p-5 w-11/12 max-w-screen-md mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <div className="w-20 h-20  mx-auto rounded-full overflow-hidden mb-4">
              <img
                className="rounded-full w-full  h-full object-cover"
                src={data[6].avatar}
                alt=""
              />
            </div>
            {/* file input */}
            <div className="flex justify-center space-x-2 items-center mb-4">
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="uppercase font-semibold text-lg
                relative text-gray-700 border-2 pr-3 pl-8 py-1 rounded-sm"
              >
                <span className="absolute top-[16px] left-1 transform -translate-y-1/2">
                  <ReplayIcon />
                </span>
                Choose Photo
              </label>
              <label
                className="uppercase font-semibold text-lg
                relative text-gray-700 border-2 pr-3 pl-8 py-1 rounded-sm"
              >
                <span className="absolute top-[16px] left-1 transform -translate-y-1/2">
                  <DeleteOutlinedIcon />
                </span>
                Remove Photo
              </label>
            </div>
            {/* form */}
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              ></form>
            </div>
            <p className="mb-4">This is a dialog content.</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenModal;
