import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/ui/Sidebar';
import AdminOverview from './pages/admin/AdminOverview';
import LandingHome from './pages/landing/LandingHome';
import { COLORS } from './constants/colors';

function App() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: COLORS.black }}>
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-7">
        <Routes>
          <Route path="/" element={<AdminOverview />} />
          <Route path="/landing" element={<LandingHome />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;