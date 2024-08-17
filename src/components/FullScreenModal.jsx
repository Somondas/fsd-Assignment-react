import { Add } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { data } from "../sampleData/sampleData";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Select from "react-select";
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
  const [selectedTeams, setSelectedTeams] = useState([
    { value: "design", label: "Design" },
    { value: "product", label: "Product" },
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
  ]);

  const handleTeamChange = (selectedOptions) => {
    setSelectedTeams(selectedOptions);
  };

  const teamOptions = [
    { value: "design", label: "Design" },
    { value: "product", label: "Product" },
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
  ];
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
                src={"https://avatars.githubusercontent.com/u/1774007"}
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
            {/* Form */}
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full bg-white rounded-sm  h-10 px-2 border border-b-gray-700  text-lg focus:outline-none"
                    placeholder="Olivia Rhye"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full bg-white rounded-sm  h-10 px-2 border border-b-gray-700  text-lg focus:outline-none"
                    placeholder="Oliviarhye@email.com"
                  />
                </div>

                {/* Role Field */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    className="mt-1 block w-full bg-white rounded-sm  h-10 px-2 border border-b-gray-700  text-lg focus:outline-none"
                  >
                    <option>Product Designer</option>
                    <option>Developer</option>
                    <option>Manager</option>
                  </select>
                </div>

                {/* Status Field */}
                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    className="mt-1 block w-full bg-white rounded-sm  h-10 px-2 border border-b-gray-700  text-lg focus:outline-none"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                {/* Teams Field */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="teams"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teams
                  </label>
                  <Select
                    id="teams"
                    isMulti
                    value={selectedTeams}
                    onChange={handleTeamChange}
                    options={teamOptions}
                    className="mt-1"
                    classNamePrefix="react-select"
                    placeholder="Select teams..."
                  />
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-end mt-4">
              <button
                className="uppercase border font-bold px-2  text-gray-700 rounded-sm mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="uppercase  font-bold px-2 py-3 text-gray-400 rounded-sm mr-2"
                onClick={closeModal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenModal;
