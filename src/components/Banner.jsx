import React from "react";
import BannerImage1 from "../assets/vector1.png";
// import BannerImage2 from "../assets/vector2.png"

function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
 
      <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-lg flex items-center justify-center min-h-[250px] overflow-hidden">
    
        <img src={BannerImage1}
          alt="In Progress Illustration"
          className="absolute opacity-100 w-48 h-48 object-contain"/>

        {/* Centered Text */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold tracking-wide">In Progress</p>
          <p className="text-5xl font-bold mt-2">{inProgressCount}</p>
        </div>
      </div>

      {/* Resolved */}
      <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-2xl shadow-lg flex items-center justify-center min-h-[250px] overflow-hidden">
          <img src={BannerImage1}
          alt="Resolved Illustration"
          className="absolute opacity-100 w-48 h-48 object-contain"/>

             <div className="relative flex flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold tracking-wide">Resolved</p>
          <p className="text-5xl font-bold mt-2">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
