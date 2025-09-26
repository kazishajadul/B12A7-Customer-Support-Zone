import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import ResolvedTasks from "./components/ResolvedTasks";
import Footer from "./components/Footer";
import ticketsData from "./tickets.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Click on a ticket → send to TaskStatus
  const handleTicketClick = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      toast.info(`Added "${ticket.title}" to Task Status`);
    }
  };

  // Complete task → move from inProgress → resolved
  const handleComplete = (id) => {
    const task = inProgress.find((t) => t.id === id);
    if (task) {
      setInProgress(inProgress.filter((t) => t.id !== id));
      setResolved([...resolved, { ...task, status: "Resolved" }]);
      setTickets(tickets.filter((t) => t.id !== id)); 
      toast.success(`"${task.title}" marked as Resolved`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
     
      {/* Banner */}
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length}/>
       <h1 className="text-2xl text-gray-700 font-bold">Cutomer Tickets</h1>


      <div className="flex-1 flex gap-6 p-6">

        {/* Left: Customer Tickets */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.length === 0 ? (
            <p>All tickets are resolved </p>) : (tickets.map((ticket) => (<TicketCard
              key={ticket.id} ticket={ticket}
              onClick={() => handleTicketClick(ticket)}
          />
            ))
         )}
      </div>

        {/* Right: Task Status + Resolved */}
        <div className="flex flex-col gap-6 w-80">
          <TaskStatus tickets={inProgress} onComplete={handleComplete} />
          <ResolvedTasks tickets={resolved} />
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}
