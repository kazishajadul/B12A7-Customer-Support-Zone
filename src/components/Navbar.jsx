import React from "react";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const handleNewTicket = () => {
    toast.info("New Ticket feature coming soon!");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white text-gray-800 shadow">
      <h1 className="text-xl font-bold">CS — Ticket System</h1>

      <div className="flex items-center gap-6">
        <a href="#">Home</a>
        <a href="#">FAQ</a>
        <a href="#">Changelog</a>
        <a href="#">Blog</a>
        <a href="#">Download</a>
        <a href="#">Contact</a>
        <button
          className="bg-purple-700 text-white px-3 py-1 rounded"
          onClick={handleNewTicket}
        >
          + New Ticket
        </button>
        <ToastContainer position="top-right" autoClose={2500} />
      </div>
    </nav>
  );
}

export default Navbar;
