import { Add } from "@mui/icons-material";
import React, { useRef, useState } from "react";

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
  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className=" flex items-center bg-violet-600 px-4 py-2 rounded-md text-white text-md font-semibold uppercase"
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
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto"
          >
            <h2 className="text-xl font-semibold mb-4">Dialog Title</h2>
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
