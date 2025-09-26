import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

function TicketCard({ ticket, onClick }) {
  const getPriorityTextColor = (priority) => {
    if (priority.toUpperCase().includes("HIGH")) return "text-pink-500";
    if (priority.toUpperCase().includes("MEDIUM")) return "text-orange-400";
    if (priority.toUpperCase().includes("LOW")) return "text-green-500";
    return "text-gray-500";
  };

  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer transition bg-white"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{ticket.title}</h3>
        <span
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            ticket.status === "Open" ? "bg-green-300 text-green-800" : "bg-orange-200 text-orange-800"
          }`}
        >
          {ticket.status}
        </span>
      </div>

      <p className="text-gray-700 mb-2">{ticket.description}</p>

      <div className="flex justify-between text-sm text-gray-600 items-center">
        <div className="space-x-2">
          <span>{ticket.id}</span>
          <span className={getPriorityTextColor(ticket.priority)}>
            {ticket.priority}
          </span>
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
