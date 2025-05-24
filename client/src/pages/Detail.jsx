import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Fallback demo data
  const {
    date = "23.05.2025",
    time = "18:46",
    wallet = "0x952...4BAfe5",
    target = "0x95222290D7272BaA3Ddd3890cE1Ed1650C84bAe5"
  } = state || {};

  return (
    <div className="min-h-screen bg-white pb-6 flex flex-col">

      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 mt-4 ml-4"
      >
        ← Back
      </button>

      {/* Card */}
      <div className="bg-gray-100 mt-6 p-6 rounded-xl shadow text-sm space-y-4 max-w-xl w-full mx-auto">
        <div className="flex justify-between font-semibold border-solid border-green-500 p-4 rounded-lg">
          <p>{date}</p>
          <p>{time}</p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-sm font-semibold">Wallet</span>
          <span className="font-medium text-black">{wallet}</span>
        </div>

        <div>
          <p className="text-gray-600 text-sm mb-1 font-semibold">You vouched for</p>
          <p className="break-all text-gray-700 text-sm">{target}</p>
        </div>
        
        <div className="pb-2">
        <a
          href={`https://etherscan.io/address/${target}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 font-semibold underline text-lg "
        >
          View On Explorer ↗
        </a>
        </div>

        <button
          className="w-full border text-xl border-black py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
        >
          Revoke Vouch
        </button>
      </div>
    </div>
  );
}
