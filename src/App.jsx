import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./components/Dashboard/Users";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import "./App.css"
function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="users" element={<Users />} />
          {/* Add other nested routes here */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
