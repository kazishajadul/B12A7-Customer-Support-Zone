import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white text-gray-800">
      {/* Left side */}
      <h1 className="text-xl font-bold">CS — Ticket System</h1>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <a href="#">Home</a>
        <a href="#">FAQ</a>
        <a href="#">Changelog</a>
        <a href="#">Blog</a>
        <a href="#">Download</a>
        <a href="#">Contact</a>
        <button className="bg-purple-700 text-white px-3 py-1 rounded">+ New Ticket</button>
      </div>
    </nav>
  );
}

export default Navbar;
