import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import ticketsData from "./data/tickets.json";

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToProgress = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      alert(`Ticket "${ticket.title}" added to In Progress`);
    }
  };

  const handleComplete = (ticketId) => {
    const ticket = inProgress.find((t) => t.id === ticketId);
    setInProgress(inProgress.filter((t) => t.id !== ticketId));
    setResolved([...resolved, ticket]);
    alert(`Ticket "${ticket.title}" marked as Resolved`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />

      <h2 className="texl-xl text-gray-800 font-bold">Cutomer Tickets</h2>

      <main className="flex flex-1 p-4 gap-4">
        {/* Left side: tickets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {ticketsData.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} onClick={() => handleAddToProgress(ticket)} />
          ))}
        </div>

        {/* Right side: task status */}
        <TaskStatus tickets={inProgress} onComplete={handleComplete} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
