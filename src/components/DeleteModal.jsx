import React from "react";

const DeleteConfirmationModal = ({ user, onDeleteConfirmed, onCancel }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Are you sure you want to delete {user.name}?</p>
        <div className="mt-4 flex items-center justify-end">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md mr-2"
            onClick={() => onDeleteConfirmed(user)}
          >
            Delete
          </button>
          <button
            className="px-2 py-1 bg-gray-300 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
