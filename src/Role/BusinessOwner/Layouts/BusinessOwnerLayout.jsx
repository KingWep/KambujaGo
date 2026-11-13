import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BusinessOwnerSidebar from './BusinessOwnerSidebar';
import BusinessOwnerNavbar from './BusinessOwnerNavbar';
import './BusinessOwner.css';

const routeMeta = {
  '/business-owner': { title: 'Dashboard', subtitle: 'Host operations overview' },
  '/business-owner/dashboard': { title: 'Dashboard', subtitle: 'Host operations overview' },
  '/business-owner/orders': { title: 'Orders & Bookings', subtitle: 'Manage guest reservations and trip dispatches' },
  '/business-owner/statistics': { title: 'Financial Analytics', subtitle: 'Revenue, occupancy rates, and fleet ROI' },
  '/business-owner/stays': { title: 'Product (Stays)', subtitle: 'Manage rooms, villas, and resort listings' },
  '/business-owner/fleet': { title: 'Fleet (Rides)', subtitle: 'Manage rental vehicles, shuttles, and driver schedules' },
  '/business-owner/calendar': { title: 'Availability Calendar', subtitle: 'Synchronize dates, rates, and seasonal pricing' },
  '/business-owner/customers': { title: 'Customer Directory', subtitle: 'Guest profiles, booking histories, and reviews' },
  '/business-owner/messages': { title: 'Messages & Support', subtitle: 'Real-time chat with guests and dispatchers' },
  '/business-owner/reviews': { title: 'Reviews & Feedback', subtitle: 'Ratings, guest feedback, and host reputation' },
  '/business-owner/settings': { title: 'Account & Business Settings', subtitle: 'Configure payout methods, policies, and notifications' },
};

export function BusinessOwnerLayout({
  children,
  pageTitle,
  pageSubtitle,
  brandName = 'TravelGo',
  user = {
    name: 'KimSan',
    role: 'Host / Business Owner',
    email: 'kimsan@kambujago.com',
    verified: true,
  },
  onLogout = () => {
    alert('Logged out successfully!');
  },
  navbarExtra = null,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const currentMeta = routeMeta[location.pathname] || {
    title: 'Dashboard',
    subtitle: 'Host operations overview',
  };

  const finalTitle = pageTitle || currentMeta.title;
  const finalSubtitle = pageSubtitle || currentMeta.subtitle;

  return (
    <div className={`bo-layout-root ${collapsed ? 'is-collapsed' : ''}`}>
      {isMobileOpen && (
        <div
          className="bo-mobile-overlay"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <BusinessOwnerSidebar
        brandName={brandName}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
        user={user}
        onLogout={onLogout}
      />

      <div className="bo-layout-body">
        <BusinessOwnerNavbar
          pageTitle={finalTitle}
          pageSubtitle={finalSubtitle}
          onOpenMobile={() => setIsMobileOpen(true)}
          user={user}
          onLogout={onLogout}
          extraActions={navbarExtra}
        />

        <main className="bo-main-content">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}

export default BusinessOwnerLayout;
