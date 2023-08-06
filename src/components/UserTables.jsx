"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const UserTables = () => {
  return (
    <div className="mt-5 relative w-full flex flex-col shadow-lg mb-6">
      <div className="block bg-transparent w-full overflow-x-auto ">
        <table className="w-full">
          <thead>
            <tr className="border border-solid border-l-0 bg-[#f4f8fa]">
              <th className="text-md text-[#555884] px-6 py-3">
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
              <th className="text-md text-[#555884] px-6 py-3">Status</th>
              <th className="text-md text-[#555884] px-6 py-3">Email</th>
              <th className="text-md text-[#555884] px-6 py-3">Role</th>
              <th className="text-md text-[#555884] px-6 py-3">Rating</th>
              <th className="text-md text-[#555884] px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-solid border-l-0 ">
              <td className="text-sm px-6 py-3 flex gap-3 items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
                <Image
                  src=""
                  alt=""
                  className="w-7 h-7 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-sm text-[rgb(23, 25, 35)] truncate font-medium">
                    Christian Nwamba
                  </p>
                  <span className="text-sm text-gray-700  truncate font-medium">
                    @christian
                  </span>
                </div>
              </td>
              <td className="text-md px-6 py-3">
                <span className=" py-[2px] px-2 bg-[#6cfcd5] text-sm font-bold rounded-sm text-[#22543d]">
                  Active
                </span>
              </td>
              <td className="text-sm px-6 py-3 truncate text-[#4a5568]">
                christian@chakra-ui.com
              </td>
              <td className="text-sm px-6 py-3 truncate text-[#4a5568]">
                Senior Developer Advocate
              </td>
              <td className="text-sm px-6 py-3 truncate">*****</td>
              <td className="text-sm px-6 py-3 truncate">
                <div className="flex items-center gap-4">
                  <RiDeleteBin5Line />
                  <FiEdit2 />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTables;
