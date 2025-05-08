
// components/Header.js
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
    return (
        <header className="relative w-full border-b-[0.25px] border-white/10 bg-black text-white py-2 px-6 flex items-center justify-center">

            {/* Glowing Purple Circle (like a soft blur sun) */} 
             <div
                className="absolute top-[-600px] left-1/2 transform  -translate-x-1/2 w-[1350px] h-[750px] rounded-full z-0 blur-[180px]"
                style={{
                    background: "radial-gradient(circle, rgba(90,30,160,3) 0%, rgba(220,220,220,0.3) 80%)"
                }}
            ></div>



            {/* Logo */}
            <Image
                src="/nextimg.png"
                alt="Logo"
                width={180}
                height={180}
                className="object-contain max-h-[100px] relative z-10"
            />

            {/* Search Bar */}
            <div className="relative w-[656px] mx-auto z-10">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full border-[0.5px] border-white/30 bg-white/10 text-white placeholder-gray-400 px-4 py-2 pr-12 rounded-full focus:outline-none focus:ring-2 ring-purple-500"
                />
                <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl pointer-events-none" />
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4 absolute right-4 z-10">
                <button className="bg-[#9E6BEB] hover:bg-purple-700 px-5 py-2 rounded-xl text-sm font-semibold">
                    Join as Actor
                </button>
                <FiBell className="text-xl" />
                <div className="w-8 h-8 rounded-full overflow-hidden mr-5 bg-gray-300">
                    <Image src="/nxtgrl.png" alt="Profile" width={32} height={32} />
                </div>
            </div>
        </header>
    );
}