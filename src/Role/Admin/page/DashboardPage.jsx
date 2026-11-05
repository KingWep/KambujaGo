import React, { useState } from "react";
import AdminSidebar from "../layouts/AdminSidebar";
import AdminNavbar from "../layouts/AdminNavbar";
import { Outlet ,useLocation} from "react-router-dom";


function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const pageTitles = {
    "/admin": "Dashboard",
    "/admin/business": "Business",
    "/admin/orders": "Platform Orders",
    "/admin/users": "User & Hotels",
    "/admin/stays": "Stays/Hotels",
    "/admin/vehicles": "Vehicles/Fleets",
    "/admin/payout": "Escrow & Payout",
    "/admin/analytics": "Analytics",
    "/admin/disputes": "Disputes",
    "/admin/reviews": "Reviews",
    "/admin/locations": "Locations",
    "/admin/broadcasts": "Broadcasts",
    "/admin/settings": "Platform Config",
    };
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="flex min-h-screen bg-slate-50">

      <AdminSidebar isSidebarOpen={isSidebarOpen} />

      <div className="min-w-0 flex-1">
        <AdminNavbar
          title={title}
          toggleSidebar={() =>
            setIsSidebarOpen((prev) => !prev)
          }
        />
        <main className="p-6">
          {/* {children} */}
          <Outlet/>
        </main>
      </div>

    </div>
  );
}

export default DashboardPage;