import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DashboardPage from './page/DashboardPage';
import BusinessPage from './page/BussinesPage';
import AdminOverview from './page/AdminOverview';
import PlaceholderPage from '../BusinessOwner/Pages/PlaceholderPage';

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<DashboardPage />}>
        <Route index element={<AdminOverview />} />
        
        <Route path="business" element={<BusinessPage />} />

        <Route
          path="orders"
          element={
            <PlaceholderPage
              title="Platform Orders"
              description="Monitor and manage platform-wide booking orders and customer reservations."
            />
          }
        />
        <Route
          path="users"
          element={
            <PlaceholderPage
              title="User & Partner Accounts"
              description="Manage registered users, guest identities, and host profiles."
            />
          }
        />
        <Route
          path="stays"
          element={
            <PlaceholderPage
              title="Stays & Hotels"
              description="Review room listings, hotel partners, and accommodation standards."
            />
          }
        />
        <Route
          path="vehicles"
          element={
            <PlaceholderPage
              title="Vehicles & Fleets"
              description="Oversee rental vehicles, transportation fleets, and driver licenses."
            />
          }
        />
        <Route
          path="payout"
          element={
            <PlaceholderPage
              title="Escrow & Host Payouts"
              description="Manage financial payouts, escrow balances, and transaction history."
            />
          }
        />
        <Route
          path="analytics"
          element={
            <PlaceholderPage
              title="Platform Analytics"
              description="Platform growth charts, conversion funnels, and revenue metrics."
            />
          }
        />
        <Route
          path="disputes"
          element={
            <PlaceholderPage
              title="Disputes & Resolutions"
              description="Handle guest refund requests and partner conflict arbitrations."
            />
          }
        />
        <Route
          path="reviews"
          element={
            <PlaceholderPage
              title="Platform Reviews"
              description="Moderate host reviews, guest ratings, and service reputation flags."
            />
          }
        />
        <Route
          path="locations"
          element={
            <PlaceholderPage
              title="Locations & Destinations"
              description="Manage tourist destinations, province tags, and travel guides."
            />
          }
        />
        <Route
          path="broadcasts"
          element={
            <PlaceholderPage
              title="System Broadcasts"
              description="Send push announcements and platform maintenance alerts."
            />
          }
        />
        <Route
          path="settings"
          element={
            <PlaceholderPage
              title="Platform Configuration"
              description="Global system settings, commission fees, and API keys."
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
