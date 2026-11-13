import React, { useState } from "react";
import AdminSidebar from "../Layouts/AdminSidebar";
import AdminNavbar from "../Layouts/AdminNavbar";
import { Outlet, useLocation } from "react-router-dom";

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const pageTitles = {
    "/admin": "Admin Dashboard",
    "/admin/business": "Business Management",
    "/admin/orders": "Platform Orders",
    "/admin/users": "User & Partner Accounts",
    "/admin/stays": "Stays & Hotels",
    "/admin/vehicles": "Vehicles & Fleets",
    "/admin/payout": "Escrow & Payout",
    "/admin/analytics": "Platform Analytics",
    "/admin/disputes": "Disputes & Support",
    "/admin/reviews": "Customer Reviews",
    "/admin/locations": "Locations & Destinations",
    "/admin/broadcasts": "System Broadcasts",
    "/admin/settings": "Platform Configuration",
  };

  const title = pageTitles[location.pathname] || "Admin Portal";

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Admin Sidebar */}
      <AdminSidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div className="min-w-0 flex-1 flex flex-col">
        <AdminNavbar
          title={title}
          toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
