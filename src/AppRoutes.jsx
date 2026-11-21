
import { Routes, Route } from 'react-router-dom';

import HomePage from './shared/pages/HomePage';
import AuthHome from './spaces/auth-remittance/AuthHome';
import BankingHome from './spaces/banking/BankingHome';
import DashboardHome from './spaces/dashboard-resource/DashboardHome';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthHome />} />
      <Route path="/banking" element={<BankingHome />} />
      <Route path="/dashboard" element={<DashboardHome />} />
    </Routes>
  );
}

export default AppRoutes;