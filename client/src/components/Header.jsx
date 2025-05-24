import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

export default function Header() {
  const [showCamera, setShowCamera] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear any wallet/session state here
    // e.g., localStorage.removeItem('walletAddress')
    navigate("/");
  };

  return (
    <>
      {/* Top Header Bar */}
      <div className="relative flex justify-between items-center px-4 py-3 shadow-md sticky top-0 bg-white z-10">
        {/* Settings Icon */}
        <img
          src="/project-images/gear.png"
          alt="Settings"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowSettings(!showSettings)}
        />

        <h1 className="text-4xl font-bold">Verifi</h1>

        {/* Scan Icon */}
        <img
          src="/project-images/scan.png"
          alt="Scan"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowCamera(!showCamera)}
        />

        {/* Settings Dropdown */}
        {showSettings && (
          <div className="absolute top-14 left-4 bg-white shadow-lg rounded-md border px-4 py-2 z-20">
            <button
              onClick={handleLogout}
              className="text-red-600 font-medium hover:underline"
            >
              Log Out
            </button>
          </div>
        )}
      </div>

      {/* Camera Preview */}
      {showCamera && (
        <div className="mt-4 flex justify-center">
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: "environment" }}
            className="rounded-lg border shadow w-full max-w-sm"
          />
        </div>
      )}
    </>
  );
}
