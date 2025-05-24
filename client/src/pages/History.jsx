import React from "react";
import { useNavigate } from "react-router-dom";

const mockHistory = [
  { date: "23.05.2025", time: "18:46", wallet: "0x952...4BAfe5", target: "0x95222290D7272BaA3Ddd3890cE1Ed1650C84bAe5" },
  { date: "21.05.2025", time: "12:24", wallet: "0xB42...2BDrf5", target: "0x21ACcb90b56B95E6A1..." },
  // Add more dummy entries as needed
];

export default function History() {
  const navigate = useNavigate();

  const goToDetails = (entry) => {
    navigate("/details", { state: entry });
  };

  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 shadow-md bg-white z-10">
        <img src="/project-images/gear.png" alt="Settings" className="w-6 h-6" />
        <h1 className="text-3xl font-bold">Verifi</h1>
        <img src="/project-images/scan.png" alt="Scan" className="w-6 h-6" />
      </div>

      {/* Main content area */}
      <div className="flex-grow px-4 mt-6 space-y-3 lg:px-60 md:px-40">
        {mockHistory.map((entry, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg shadow text-sm"
          >
            <div className="text-gray-700 font-medium">
              {entry.date}<br />{entry.time}
            </div>
            <div className="text-gray-600 text-center">{entry.wallet}</div>
            <div className="text-right">
              <img
                src="/project-images/eye.png"
                alt="View"
                className="w-5 h-5 cursor-pointer inline-block"
                onClick={() => goToDetails(entry)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-around items-center px-4 py-4 bg-white shadow-inner">
        <button onClick={() => navigate("/home")} className="flex flex-col items-center">
          <img src="/project-images/home (2).png" alt="Home" className="w-6 h-6 mb-1" />
          <span className="text-xs">Home</span>
        </button>
        <button onClick={() => navigate("/history")} className="flex flex-col items-center">
          <img src="/project-images/file (1).png" alt="History" className="w-6 h-6 mb-1" />
          <span className="text-xs">History</span>
        </button>
      </div>
    </div>
  );
}