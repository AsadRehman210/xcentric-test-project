import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Challenge1 from "./pages/Challenge1";
import Challenge2 from "./pages/Challenge2";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/challenge1" replace />} />
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/challenge2" element={<Challenge2 />} />
      </Routes>
    </>
  );
}
