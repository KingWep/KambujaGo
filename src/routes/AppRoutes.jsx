import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AdminRoutes from '../Role/Admin/AdminRoutes';
import BusinessOwnerRoutes from '../Role/BusinessOwner/BusinessOwnerRoutes';

/**
 * Global AppRoutes Configuration
 * Unifies Admin Portal and Business Owner Portal routes
 */
export function AppRoutes() {
  return (
    <Routes>
      {/* Root redirect: Default to Business Owner or Admin Dashboard */}
      <Route path="/" element={<Navigate to="/business-owner/dashboard" replace />} />

      {/* Admin Portal (/admin/*) */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Business Owner Portal (/business-owner/*) */}
      <Route path="/business-owner/*" element={<BusinessOwnerRoutes />} />

      {/* Global Fallback 404: Redirect back to active portal */}
      <Route path="*" element={<Navigate to="/business-owner/dashboard" replace />} />
    </Routes>
  );
}

export default AppRoutes;
