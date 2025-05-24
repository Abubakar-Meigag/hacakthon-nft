import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white flex justify-center px-4 pt-10">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <img
          src="/project-images/Logo Black.png"
          alt="Verifi Logo"
          className="h-72 mx-auto"
        />

        {/* Title */}
        <h1 className="text-9xl font-extrabold mb-2">Verifi</h1>
        <p className="text-gray-600 mb-4 text-lg">Social Proof of Personhood</p>

        {/* Connect with MetaMask */}
        <button
          onClick={handleConnect}
          className="flex items-center justify-center w-full border-2 border-orange-500 text-orange-500 font-medium py-3 rounded-full mb-4 hover:bg-orange-50 transition"
        >
          <img
            src="/project-images/meta.png"
            alt="MetaMask"
            className="h-10 mr-2"
          />
          Connect With MetaMask
        </button>

        {/* Connect with Base */}
        <button
          onClick={handleConnect}
          className="w-full border-2 border-black text-black font-medium py-3 rounded-full hover:bg-gray-100 transition flex items-center justify-center mb-4"
        >
                    <img
            src="/project-images/base.png"
            alt="MetaMask"
            className="h-10 mr-2"
          />
          Connect With Base
        </button>
      </div>
    </div>
  );
}
