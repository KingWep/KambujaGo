import React from 'react';
import {
  Shield,
  LayoutDashboard,
  Building2,
  ShoppingBag,
  Users,
  BedDouble,
  Car,
  CreditCard,
  BarChart3,
  LifeBuoy,
  Star,
  MapPin,
  Bell,
  Settings,
  Globe,
} from 'lucide-react';
import SidebarButton from '../Components/SidebarButton';

function AdminSidebar({ isSidebarOpen }) {
  return (
    <div
      className={`min-h-screen bg-blue-600 text-white transition-all duration-300 flex flex-col justify-between ${
        isSidebarOpen ? 'w-72' : 'w-20'
      }`}
    >
      <div className="items-center px-4">
        {/* Logo / Brand Header */}
        <div className="flex items-center gap-3 mt-5 px-2">
          <div className="p-1 bg-white/10 rounded-xl">
            <Shield size={28} className="text-white" />
          </div>
          {isSidebarOpen && (
            <div>
              <h1 className="text-xl font-bold leading-none">Travel Go</h1>
              <span className="text-xs text-blue-200">Admin Control</span>
            </div>
          )}
        </div>

        {/* Main Nav Links */}
        <div className="mt-6 flex flex-col gap-0.5">
          <SidebarButton
            to="/admin"
            icon={LayoutDashboard}
            title="Dashboard"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/business"
            icon={Building2}
            title="Business"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/orders"
            icon={ShoppingBag}
            title="Platform Orders"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/users"
            icon={Users}
            title="User & Hotels"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/stays"
            icon={BedDouble}
            title="Stays/Hotels"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/vehicles"
            icon={Car}
            title="Vehicles/Fleets"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/payout"
            icon={CreditCard}
            title="Escrow & Payout"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/analytics"
            icon={BarChart3}
            title="Analytics"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/disputes"
            icon={LifeBuoy}
            title="Disputes"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/reviews"
            icon={Star}
            title="Reviews"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/locations"
            icon={MapPin}
            title="Locations"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/broadcasts"
            icon={Bell}
            title="Broadcasts"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarButton
            to="/admin/settings"
            icon={Settings}
            title="Platform Config"
            isSidebarOpen={isSidebarOpen}
          />
        </div>
      </div>

      {/* Footer / Switch to Business Owner Portal */}
      <div className="p-4 border-t border-blue-500/60 mt-6">
        <SidebarButton
          to="/business-owner/dashboard"
          icon={Globe}
          title="Business Owner Side"
          isSidebarOpen={isSidebarOpen}
        />
        {isSidebarOpen && (
          <div className="ms-10 mt-2 flex items-center gap-2 text-xs font-medium text-blue-200/80">
            <a href="#facebook" className="hover:text-white transition-colors">
              Facebook
            </a>
            <span>·</span>
            <a href="#twitter" className="hover:text-white transition-colors">
              Twitter
            </a>
            <span>·</span>
            <a href="#help" className="hover:text-white transition-colors">
              Help
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminSidebar;
