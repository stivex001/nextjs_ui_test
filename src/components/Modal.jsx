import Image from "next/image";
import React from "react";

const Modal = ({ user, closeModal }) => {
  const fullNameParts = user.name.split(" ");
  const firstNameInitial = fullNameParts[0].charAt(0).toUpperCase();
  const lastNameInitial = fullNameParts.slice(-1)[0].charAt(0).toUpperCase();

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Edit User</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className={`w-20 h-20 flex items-center justify-center rounded-full bg-blue-400 text-white`}
          >
            {firstNameInitial + lastNameInitial}
          </div>
        </div>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              defaultValue={user.name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 border rounded-md w-full"
              defaultValue={user.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              type="email"
              className="mt-1 p-2 border rounded-md w-full"
              defaultValue={user.company.name}
            />
          </div>
          {/* Add more form fields for other user details */}
          <div className="mt-4 flex items-center justify-between mb-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Update
            </button>
            <button
              className="px-2 py-1 bg-gray-300 rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
