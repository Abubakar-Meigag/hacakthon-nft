import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <img
          src="/project-images/Logo Black.png"
          alt="Verifi Logo"
          className="h-80 mx-auto"
        />

        {/* Title */}
        <h1 className="text-9xl font-extrabold mb-2">Verifi</h1>
        <p className="text-gray-600 mb-10 text-sm">Social Proof of Personhood</p>

        {/* Connect with MetaMask */}
        <button
          onClick={handleConnect}
          className="flex items-center justify-center w-full border-2 border-orange-500 text-orange-500 font-medium py-3 rounded-full mb-4 hover:bg-orange-50 transition"
        >
          <img
            src="https://cryptologos.cc/logos/metamask-fox-logo.png?v=032"
            alt="MetaMask"
            className="w-6 h-6 mr-2"
          />
          Connect With MetaMask
        </button>

        {/* Connect with Base */}
        <button
          onClick={handleConnect}
          className="w-full border-2 border-black text-black font-medium py-3 rounded-full hover:bg-gray-100 transition"
        >
          Connect With Base
        </button>
      </div>
    </div>
  );
}
