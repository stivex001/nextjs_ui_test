import UserTables from "@/components/UserTables";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="py-5 px-6 w-full md:w-[90%] lg:w-[80%]  md:mx-auto">
      <div className="shadow-md py-5 px-6 mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-xl text-[rgb(23, 25, 35)]">Members</p>
          <div className="flex items-center gap-2 border px-5 py-2 rounded-lg">
            <AiOutlineSearch color="#566072" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none focus:ring-cyan-400"
            />
          </div>
        </div>
        {/* UserTables */}

        <UserTables data={data} />
      </div>
    </main>
  );
}
