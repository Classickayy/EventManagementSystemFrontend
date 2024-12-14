import React from 'react';

const RsvpConfirmPage = () => {
  const event = JSON.parse(localStorage.getItem("event"))
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Confirmation Header */}
      <h1 className="text-3xl font-bold text-blue-600">RSVP Confirmed!</h1>
      <p className="mt-2 text-lg text-gray-700 text-center">
        Thank you for registering. Your spot for the event has been successfully reserved.
      </p>
      
      {/* Event Details Card */}
      <div className="mt-8 w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Details</h2>
        <p className="text-gray-700">
          <span className="font-medium">Event:</span> {event.name} 
        </p>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">Date:</span> {event.event_date}
        </p>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">Time:</span> {event.event_time}
        </p>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">Location:</span> {event.location}
        </p>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">Seats Remaining:</span> 15
        </p>
      </div>

      {/* Return Button */}
      <button
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        onClick={() => (window.location.href = '/')}
      >
        Return to Events
      </button>
    </div>
  );
};

export default RsvpConfirmPage;
