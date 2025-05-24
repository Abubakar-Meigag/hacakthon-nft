import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const wallet = localStorage.getItem("wallet");

  return wallet ? children : <Navigate to="/" replace />;
}
