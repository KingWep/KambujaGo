
import { Routes, Route, Navigate } from "react-router-dom";

import AdminRoutes from "../Role/Admin/AdminRoutes";
import BusinessOwnerRoutes from "../Role/BusinessOwner/BusinessOwnerRoutes";

// User Portal
import UserLayout from "../Role/User/Layouts/UserLayout";
import HomePage from "../Role/User/Feature/Home/pages/HomePage";
import DestinationsPage from "../Role/User/Feature/Destinations/pages/DestinationsPage";
import HotelsPage from "../Role/User/Feature/Hotels/pages/HotelsPage";
import MotoRidesPage from "../Role/User/Feature/MotoRides/pages/MotoRidesPage";
import CarRentalPage from "../Role/User/Feature/CarRental/pages/CarRentalPage";
import AboutPage from "../Role/User/Feature/About/pages/AboutPage";
import ContactPage from "../Role/User/Feature/Contact/pages/ContactPage";
import ProfilePage from "../Role/User/Feature/Profile/pages/ProfilePage";
import MyBookingsPage from "../Role/User/Feature/Bookings/pages/MyBookingsPage";
import FavoritesPage from "../Role/User/Feature/Favorites/pages/FavoritesPage";
import ReviewsPage from "../Role/User/Feature/Reviews/pages/ReviewsPage";
import SettingsPage from "../Role/User/Feature/Settings/pages/SettingsPage";

export function AppRoutes() {
  return (
    <Routes>
      {/* User Portal */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/motorides" element={<MotoRidesPage />} />
        <Route path="/car-rental" element={<CarRentalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* Admin Portal */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Business Owner Portal */}
      <Route
        path="/business-owner/*"
        element={<BusinessOwnerRoutes />}
      />

      {/* Global 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
