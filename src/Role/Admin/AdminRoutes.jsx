import { Routes, Route, Navigate } from "react-router-dom";
import AnalyticsPage from "./page/AnalyticsPage";
import DashboardPage from "./page/DashboardPage";
import BusinessPage from "./page/BussinesPage";
import PlatformPage from "./page/PlatformPage";
import UserPage from "./page/UserPage";
import StayPage from "./page/StayPage";
import VehiclesPage from "./page/VehiclesPage";
import PayoutPage from "./page/PayoutPage";
import Disputes from "./page/Disputes";
import Reviews from "./page/Reviews";
import Locations from "./page/Locations";
import Broadcasts from "./page/Broadcasts";
import Platform from "./page/Platform";

function AdminRoutes() {
  return (
    <Routes>
      {/* Redirect root URL to Admin Dashboard */}
      <Route path="/" element={<Navigate to="/admin" replace />} />

      <Route path="/admin" element={<DashboardPage />}>
        {/* <Route path="/admin/business" element={<BusinessPage />} /> */}
        <Route path="business" element={<BusinessPage />} />
        <Route path="orders" element={<PlatformPage/>} />
        <Route path="users" element={<UserPage/>} />
        <Route path="stays" element={<StayPage/>} />
        <Route path="vehicles" element={<VehiclesPage/>} />
        <Route path="payout" element={<PayoutPage/>} />
        <Route path="analytics" element={<AnalyticsPage/>} />
        <Route path="disputes" element={<Disputes/>} />
        <Route path="reviews" element={<Reviews/>} />
        <Route path="locations" element={<Locations/>} />
        <Route path="broadcasts" element={<Broadcasts/>} />
        <Route path="settings" element={<Platform/>} />
      </Route>
      {/* Page not found */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default AdminRoutes;