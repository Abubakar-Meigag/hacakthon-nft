import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConnect = async () => {
  setLoading(true);
  setError("");

  try {
    if (!window.ethereum || !window.ethereum.isMetaMask) {
      throw new Error("MetaMask is not installed.");
    }

    // Step 1: Check if MetaMask is already connected
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    let wallet;

    if (accounts.length > 0) {
      // Already connected
      wallet = accounts[0];
    } else {
      // Check if MetaMask is already in a request state
      const isProcessing = window.ethereum._metamask?.isUnlocked && window.ethereum._metamask.isUnlocked();

      if (isProcessing) {
        throw new Error("MetaMask is already processing a request. Please open MetaMask or refresh.");
      }

      // Step 2: Request connection (only if safe)
      const requested = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      wallet = requested[0];
    }

    if (!wallet) throw new Error("No wallet returned");

    localStorage.setItem("wallet", wallet);
    navigate("/home");
  } catch (err) {
    setError(err.message || "Failed to connect wallet.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-white flex justify-center px-4 pt-10">
      <div className="max-w-md w-full text-center">
        <img
          src="/project-images/Logo Black.png"
          alt="Verifi Logo"
          className="h-72 mx-auto"
        />

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
          {loading ? "Connecting..." : "Connect With MetaMask"}
        </button>

        {/* Connect with Base (disabled) */}
        <button
          disabled
          className="w-full border-2 border-gray-300 text-gray-400 font-medium py-3 rounded-full flex items-center justify-center mb-4 cursor-not-allowed"
        >
          <img
            src="/project-images/base.png"
            alt="Base"
            className="h-10 mr-2"
          />
          Connect With Base (Soon)
        </button>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>
    </div>
  );
}
