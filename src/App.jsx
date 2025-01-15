import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard"; // Import halaman Dashboard
import ListPendaftar from "./pages/ListPendaftar"; // Import halaman List Pendaftar
import ListPesertaMagang from "./pages/ListPesertaMagang"; // Import halaman List Peserta Magang

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        <Route path="/list-pendaftar" element={<ListPendaftar />} /> {/* List Pendaftar route */}
        <Route path="/list-peserta-magang" element={<ListPesertaMagang />} /> {/* List Peserta Magang route */}
      </Routes>
    </Router>
  );
};

export default App;
