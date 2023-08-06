"use client";

import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineArrowDown } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modal";
import DeleteConfirmationModal from "./DeleteModal";

const UserTables = ({ data, searchUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate range of items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get the items for the current page
  const userData = data.slice(startIndex, endIndex);

  const filteredUserData = userData.filter((user) => {
    return user.name.toLowerCase().includes(searchUser.toLowerCase());
  });

  const userInitials = userData.map((user) => {
    const fullNameParts = user.name.split(" ");
    const firstNameInitial = fullNameParts[0].charAt(0).toUpperCase();
    const lastNameInitial = fullNameParts.slice(-1)[0].charAt(0).toUpperCase();
    return `${firstNameInitial}${lastNameInitial}`;
  });


  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteConfirmed = (user) => {
    console.log(`Deleting user: ${user.name}`);
    setUserToDelete(null);
  };

  return (
    <div className="mt-5 relative w-full flex flex-col mb-6">
      <div className="block bg-transparent w-full overflow-x-auto ">
        <table className="w-full">
          <thead>
            <tr className="border border-solid border-l-0 bg-[#f4f8fa]">
              <th className="px-6 py-3 text-left text-md font-medium text-[#555884] flex items-center gap-2'">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="cursor-pointer"
                  />
                  <span className="">Name</span>
                  <AiOutlineArrowDown />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-[#555884]">
                Status
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-[#555884]">
                Email
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-[#555884]">
                Role
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-[#555884]">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-[#555884]"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUserData.map((user, index) => (
              <tr className="border border-solid border-l-0  " key={user.id}>
                <td className="text-sm px-6 py-3 flex gap-3 items-center">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="cursor-pointer"
                  />
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7bc8aa] text-black text-lg">
                    {userInitials[index]}
                    {/* Display initial */}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-[rgb(23, 25, 35)] truncate font-medium">
                      {user.name}
                    </p>
                    <span className="text-sm text-gray-700  truncate font-medium">
                      @{user.username}
                    </span>
                  </div>
                </td>
                <td className="text-md px-6 py-3">
                  <span className=" py-[2px] px-2 bg-[#6cfcd5] text-sm font-bold rounded-sm text-[#22543d]">
                    Active
                  </span>
                </td>
                <td className="text-sm px-6 py-3 truncate text-[#4a5568]">
                  {user.email}
                </td>
                <td className="text-sm px-6 py-3 truncate text-[#4a5568]">
                  {user.company.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-50">
                  <div className="flex items-center">
                    <AiFillStar className="text-[#3182ce] text-2xl cursor-pointer hover:scale-105" />
                    <AiFillStar className="text-[#3182ce] text-2xl cursor-pointer hover:scale-105" />
                    <AiFillStar className="text-[#3182ce] text-2xl cursor-pointer hover:scale-105" />
                    <AiFillStar className="text-[#3182ce] text-2xl cursor-pointer hover:scale-105" />
                    <AiFillStar className="text-[#E2E8F0] text-2xl cursor-pointer hover:scale-105" />
                  </div>
                </td>
                <td className="px-6 py-6 text-sm font-medium flex items-center gap-8 truncate">
                  <div className="flex items-center gap-4 ">
                    <button onClick={() => setUserToDelete(user)}>
                      <RiDeleteBin5Line
                        size={30}
                        className='hover:bg-[#EDF2F7] p-1 rounded-md'
                      />
                    </button>

                    <button onClick={() => handleEditClick(user)}>
                      <FiEdit2 size={30} className='hover:bg-[#EDF2F7] p-1 rounded-md' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {isModalOpen && <Modal user={selectedUser} closeModal={closeModal} />}
          {userToDelete && (
            <DeleteConfirmationModal
              user={userToDelete}
              onDeleteConfirmed={handleDeleteConfirmed}
              onCancel={() => setUserToDelete(null)}
            />
          )}
        </table>
        {/* Pagination controls and information */}
        <div className="text-center md:flex justify-between items-center my-4 p-4 ">
          <p className="mb-5 text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
            {data.length} results
          </p>
          <div>
            <button
              className="px-4 py-2 mx-1 bg-gray-300 rounded-md"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 mx-1 bg-gray-300 rounded-md"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= data.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTables;
