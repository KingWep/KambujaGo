import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "./page/DashboardPage";
import BusinessPage from "./page/BussinesPage";

function AdminRoutes() {
  return (
    <Routes>
      {/* Redirect root URL to Admin Dashboard */}
      <Route path="/" element={<Navigate to="/admin" replace />} />

      <Route path="/admin" element={<DashboardPage />}>
        <Route path="/admin/business" element={<BusinessPage />} />
        <Route path="business" element={<BusinessPage />} />
        <Route path="orders" element={<h1>Platform Orders</h1>} />
        <Route path="users" element={<h1>User & Hotels</h1>} />
        <Route path="stays" element={<h1>Stays/Hotels</h1>} />
        <Route path="vehicles" element={<h1>Vehicles/Fleets</h1>} />
        <Route path="payout" element={<h1>Escrow & Payout</h1>} />
        <Route path="analytics" element={<h1>Analytics</h1>} />
        <Route path="disputes" element={<h1>Disputes</h1>} />
        <Route path="reviews" element={<h1>Reviews</h1>} />
        <Route path="locations" element={<h1>Locations</h1>} />
        <Route path="broadcasts" element={<h1>Broadcasts</h1>} />
        <Route path="settings" element={<h1>Platform Config</h1>} />
      </Route>
      {/* Page not found */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default AdminRoutes;