import React from 'react'
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
} from 'lucide-react'
// import { Building2, LayoutGrid } from 'lucide-react'
import SidebarButton from '../Components/SidebarButton'

function AdminSidebar({isSidebarOpen} ) {
  return (
    
    <div className={`min-h-screen  bg-blue-600 text-white transition-all duration-300
          ${isSidebarOpen ? "w-72" : "w-20"}`} >
      
      <div className=' items-center gap-3 px-5'>
      
      <div className="flex items-center gap-3 mt-5">
          <div>
            <Shield size={28} />
          </div>
            {isSidebarOpen && (
          <h1 className="text-xl font-bold">
            Travel Go
          </h1>
        )}
      </div>

        <div className='mt-5'> 
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

      <hr className="border-t border-blue-500" />

      <div className='ms-7'>
        <SidebarButton 
          icon={Globe}
          title="Public Marketplace"
          active={false}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="ms-11 flex items-start justify-start gap-2 text-xs font-medium text-blue-200/80">
        <a href="#facebook" className="hover:text-white transition-colors">
          Facebook
        </a>
        <span>·</span>
        <a href="#twitter" className="hover:text-white transition-colors">
          Twitter
        </a>
        <span>·</span>
        <a href="#google" className="hover:text-white transition-colors">
          Google
        </a>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default AdminSidebar