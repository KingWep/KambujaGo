import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import BusinessOwnerLayout from './Layouts/BusinessOwnerLayout';
import BusinessOwnerDashboard from './Pages/BusinessOwnerDashboard';
import RoomsPage from './Feature/Rooms/pages/RoomsPage';
import TransportPage from './Feature/Transport/pages/TransportPage';
import PlaceholderPage from './Pages/PlaceholderPage';

function BusinessOwnerRoutes() {
  return (
    <Routes>
      <Route element={<BusinessOwnerLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<BusinessOwnerDashboard />} />

        <Route path="stays" element={<RoomsPage />} />
        <Route path="fleet" element={<TransportPage />} />

        <Route
          path="orders"
          element={
            <PlaceholderPage
              title="Orders & Bookings"
              description="Manage your guest reservations, ride bookings, and dispatch status."
            />
          }
        />
        <Route
          path="statistics"
          element={
            <PlaceholderPage
              title="Financial Analytics"
              description="Review revenue, occupancy rates, earnings breakdown, and fleet ROI."
            />
          }
        />
        <Route
          path="calendar"
          element={
            <PlaceholderPage
              title="Availability Calendar"
              description="Block dates, adjust seasonal room pricing, and inspect scheduled ride departures."
            />
          }
        />
        <Route
          path="customers"
          element={
            <PlaceholderPage
              title="Customer Directory"
              description="View verified guest histories, passenger details, and contact lists."
            />
          }
        />
        <Route
          path="messages"
          element={
            <PlaceholderPage
              title="Messages & Support"
              description="Real-time messaging with guests, drivers, and platform administration."
            />
          }
        />
        <Route
          path="reviews"
          element={
            <PlaceholderPage
              title="Reviews & Ratings"
              description="Host reviews, guest ratings, and service reputation metrics."
            />
          }
        />
        <Route
          path="settings"
          element={
            <PlaceholderPage
              title="Account & Business Settings"
              description="Configure payouts, cancellation policies, staff permissions, and alert preferences."
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default BusinessOwnerRoutes;

