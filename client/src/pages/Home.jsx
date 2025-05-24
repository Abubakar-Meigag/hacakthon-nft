import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";


export default function Home() {
  const navigate = useNavigate();
  const isVerified = false; // This should be replaced with actual verification logic

  const walletAddress = localStorage.getItem("wallet");

  return (
    <div className="bg-white flex flex-col justify-between pb-6">


      {/* Main QR + Status */}
      <div className="flex flex-col items-center justify-center px-4 mt-6">
        {/* Wallet Address */}
        <div className="flex items-center bg-gray-200 rounded-full px-4 py-1 mb-6 shadow text-sm font-medium text-gray-700">
          {walletAddress}
          <img
            src="/project-images/copy.png"
            alt="Copy"
            className="w-4 h-4 ml-2 cursor-pointer"
          />
        </div>

        {/* QR Code */}
        <QRCodeSVG
          value={walletAddress}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
        />

        {/* Status */}
        <div className="flex items-center justify-center space-x-3 mt-6">
          {isVerified ? (
            <>
              <img
                src="/project-images/shield.png"
                alt="Verified"
                className="h-24"
              />
              <div className="text-left">
                <p className="text-sm text-gray-600">Status:</p>
                <p className="text-green-600 font-semibold text-lg">Verified</p>
              </div>
            </>
          ) : (
            <>
              <img
                src="/project-images/open.png"
                alt="Not Verified"
                className="w-6 h-6"
              />
              <div className="text-left">
                <p className="text-sm text-gray-600">Status:</p>
                <p className="text-red-600 font-semibold text-lg">Not Verified</p>
              </div>
            </>
          )}
        </div>

        {/* Trust Score & Vouchers */}
        <div className="grid grid-cols-2 gap-4 w-full mt-8 max-w-xs">
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
            <p className="text-gray-500 text-sm">Trust Score</p>
            <p className="text-2xl font-bold text-green-600">93/100</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
            <p className="text-gray-500 text-sm">Vouchers</p>
            <p className="text-2xl font-bold text-blue-600">8</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-around items-center pt-16">
        <button
          onClick={() => navigate("/home")}
          className="flex flex-col items-center"
        >
          <img
            src="/project-images/home (1).png"
            alt="Home"
            className="w-6 h-6 mb-1"
          />
          <span className="text-xs">Home</span>
        </button>

        <button
          onClick={() => navigate("/history")}
          className="flex flex-col items-center"
        >
          <img
            src="/project-images/file (2).png"
            alt="History"
            className="w-6 h-6 mb-1"
          />
          <span className="text-xs">History</span>
        </button>
      </div>
    </div>
  );
}