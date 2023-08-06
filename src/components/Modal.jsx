import React from "react";

const Modal = ({ user, closeModal }) => {
  // ... Implement your modal content with the user details and form

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* ... Modal content, including user details and form ... */}
        <button
          className="px-4 py-2 bg-gray-300 rounded-md"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
