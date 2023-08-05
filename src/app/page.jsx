import Image from "next/image";
import {AiOutlineSearch} from "react-icons/ai"

export default function Home() {
  return (
    <main className="py-5 px-6">
      <div className="shadow-md py-5 px-6 mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-xl text-[rgb(23, 25, 35)]">Members</p>
          <div className="flex items-center gap-2 border px-5 py-2 rounded-lg">
            <AiOutlineSearch color="#566072" />
            <input type="text" placeholder="Search" className="border-none outline-none focus:ring-cyan-400" />
          </div>
        </div>
      </div>
    </main>
  );
}
