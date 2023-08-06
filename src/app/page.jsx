/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import UserTables from "@/components/UserTables";
import { getData } from "@/components/data";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  const [searchUser, setSearchUser] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="bg-white rounded-2xl shadow py-8 my-12 sm:mx-6 md:mx-12">
      <div className="container mx-auto w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-2 md:px-8 mb-6'">
          <p className="text-xl text-[rgb(23, 25, 35)] mb-4">Members</p>
          <div className="relative">
            <AiOutlineSearch
              color="#566072"
              size={20}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-slate-400 cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 rounded-lg pl-10 pr-4 py-2 w-2/3 md:w-full focus:outline-0"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
            />
          </div>
        </div>
        {/* UserTables */}

        {isLoading ? (
          <div className="flex justify-center mt-10">
            <p className="text-xl text-green-600">Loading........</p>
          </div>
        ) : (
          <UserTables data={data} searchUser={searchUser} />
        )}
      </div>
    </main>
  );
}
