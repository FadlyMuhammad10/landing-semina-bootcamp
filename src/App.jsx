// import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <Detail />,
    },
    {
      path: "/checkout",
      element: (
        <ProtectedRoute>
          <Checkout />,
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <GuestRoute>
          <Login />
        </GuestRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <GuestRoute>
          <Register />
        </GuestRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
