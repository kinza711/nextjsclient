

"use client";

import React, { useState, useEffect, useRef } from "react";

const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 60 }, (_, i) => i);

const ScrollSelector = ({ items, value, onChange }) => {
    const listRef = useRef(null);

    useEffect(() => {
        const selectedIndex = items.indexOf(value);
        if (listRef.current) {
            listRef.current.scrollTop = selectedIndex * 40;
        }
    }, [value, items]);

    const handleScroll = (e) => {
        const index = Math.round(e.target.scrollTop / 40);
        onChange(items[index]);
    };

    return (
        <div className="relative h-[200px] w-16 overflow-hidden">
            <div
                ref={listRef}
                className="h-full w-full overflow-y-scroll scroll-smooth no-scrollbar"
                onScroll={handleScroll}
            >
                <div className="flex flex-col items-center py-40">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="h-10 text-white text-lg flex items-center justify-center"
                        >
                            {item.toString().padStart(2, "0")}
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade blur top and bottom */}
            <div className="pointer-events-none absolute top-0 h-10 w-full bg-gradient-to-b from-black to-transparent" />
            <div className="pointer-events-none absolute bottom-0 h-10 w-full bg-gradient-to-t from-black to-transparent" />
        </div>
    );
};

export default function CreateAdventure() {
    const [firstName, setFirstName] = useState("");
    const [hour, setHour] = useState(8);
    const [minute, setMinute] = useState(0);

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-2">
            <button className="absolute mt-24 top-4 left-4 text-sm text-white bg-[#a1a1a11c] rounded-full px-4 py-2">
                ← Back
            </button>

            <h1 className="text-4xl text-white -mt-20 font-poppins mb-5">Create Your Own Adventure</h1>
            <p className="text-md  text-white mb-8 font-poppins ">
                Tailor your session to your pace, mood, and style
            </p>

            <div className="w-full max-w-xs flex flex-col gap-6 items-center">
                <label className="font-semibold">First Names</label>

        
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,0.85)_90%)] border border-white/20 rounded-full px-2 py-2 text-white placeholder-gray-400 text-center backdrop-blur-md"
                />


<div className="relative flex gap-4 z-[1] w-[60%] items-center justify-center p-10 px-10">
  <ScrollSelector items={hours} value={hour} onChange={setHour} />
  <ScrollSelector items={minutes} value={minute} onChange={setMinute} />

  {/* Shared overlay for both columns */}
  <div className="pointer-events-none absolute top-1/2 left-0 w-full h-10 -translate-y-1/2 flex items-center justify-center z-[-1]">
    <div
      className="bg-[#1d1b20] border border-white/20 px-10 rounded-full w-full h-10 flex items-center justify-center text-white font-semibold space-x-1"
      style={{
        background: 'rgba(29, 27, 32, 0.6)', // Slightly lighter background
        backdropFilter: 'blur(3px)', // Reduced blur
        WebkitBackdropFilter: 'blur(3px)', // Safari compatibility
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)' // Slight shadow for text
      }}
    >
   
     
    </div>
  </div>
</div>


                <button className=" px-10 py-1 bg-[linear-gradient(to_bottom,_#9E6BEB,_#5E2D8C)] font-semibold rounded-lg hover:opacity-90 transition">
                    Next
                </button>
            </div>
        </div>
    );
}
