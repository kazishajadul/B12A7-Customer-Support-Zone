import React from "react";

function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left Side - In Progress */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center">
        <p className="text-sm font-semibold tracking-wide ">
          In Progress
        </p>
        <p className="text-5xl font-bold mt-2">{inProgressCount}</p>
      </div>

      {/* Right Side - Resolved */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center">
        <p className="text-sm font-semibold tracking-wide ">
          Resolved
        </p>
        <p className="text-5xl font-bold mt-2">{resolvedCount}</p>
      </div>
    </div>
  );
}

export default Banner;
