import React from "react";

function ResolvedTasks({ tickets }) {
  return (
    <div className="w-full border-l pl-4">
      <h2 className="text-xl font-bold mb-4">Resolved Tasks</h2>
      {tickets.length === 0 ? (
        <p>No resolved tasks</p>
      ) : (
        tickets.map((ticket) => (
          <div key={ticket.id} className="border rounded p-2 mb-2 bg-green-50">
            <p className="font-medium">{ticket.title}</p>
            <p className="text-sm text-gray-600">{ticket.customer}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ResolvedTasks;
