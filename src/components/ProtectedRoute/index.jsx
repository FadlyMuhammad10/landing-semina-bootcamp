import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);

  return auth.token ? children : <Navigate to="/login" replace />;
}
