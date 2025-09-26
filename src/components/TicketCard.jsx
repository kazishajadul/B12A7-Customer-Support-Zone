
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

function TicketCard({ ticket, onClick }) {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer transition bg-white"
    >
      {/* First Line: Title & Status */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{ticket.title}</h3>
        <button
          className={`px-4 py-1 rounded-full text-white text-sm font-medium ${
            ticket.status === "Open" ? "bg-green-500" : "bg-orange-500"
          }`}
        >
          {ticket.status}
        </button>
      </div>

      {/* Second Line: Description */}
      <p className="text-gray-700 mb-2">{ticket.description}</p>

      {/* Third Line: ID + Priority on left, Customer + Date on right */}
      <div className="flex justify-between text-sm text-gray-600 items-center">
        <div className="space-x-2">
          <span>{ticket.id}</span>
          <span>{ticket.priority}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>{ticket.customer}</span>
          <FaRegCalendarAlt className="text-gray-400 text-sm" />
          <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
