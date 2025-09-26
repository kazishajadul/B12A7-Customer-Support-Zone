import React from "react";

function TaskStatus({ tickets, onComplete }) {
  return (
    <div className="w-80 border-l pl-4">
      <h2 className="text-xl font-bold mb-4">Task Status</h2>
      {tickets.length === 0 ? (
        <p>No tasks in progress</p>
      ) : (
        tickets.map((ticket) => (
          <div key={ticket.id} className="border rounded p-2 mb-2">
            <p>{ticket.title}</p>
            <button
              onClick={() => onComplete(ticket.id)}
              className="bg-green-500 text-white px-2 py-1 rounded mt-2"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskStatus;
