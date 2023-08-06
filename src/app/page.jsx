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
    <main className="py-5 px-6 w-full md:w-[90%] lg:w-[80%]  md:mx-auto">
      <div className="shadow-md py-5 px-6 mx-auto">
        <div className="md:flex justify-between items-center ">
          <p className="text-xl text-[rgb(23, 25, 35)] mb-4">Members</p>
          <div className="flex items-center gap-2 border px-5 py-2 rounded-lg">
            <AiOutlineSearch color="#566072" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none focus:ring-cyan-400"
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
