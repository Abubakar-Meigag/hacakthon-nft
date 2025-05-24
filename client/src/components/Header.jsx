// src/components/Header.jsx
import React, { useState } from "react";
import Webcam from "react-webcam";

export default function Header() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <>
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-4 py-3 shadow-md sticky top-0 bg-white z-10">
        <img src="/project-images/gear.png" alt="Settings" className="w-6 h-6" />
        <h1 className="text-4xl font-bold">Verifi</h1>
        <img
          src="/project-images/scan.png"
          alt="Scan"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowCamera(!showCamera)}
        />
      </div>

      {/* Optional Camera Preview */}
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