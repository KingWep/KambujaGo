import {
  PanelLeftClose,
  Bell,
} from "lucide-react";

function AdminNavbar({toggleSidebar,title}) {
  return (
    <div className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-12">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-8">
        
        {/* Sidebar Icon */}
        <button
          onClick={() => {
            console.log("Sidebar button clicked!");
            toggleSidebar();
          }}
          className="text-slate-500 hover:text-blue-600">
          <PanelLeftClose size={28} />
        </button>
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {title}
          </h1>
          <p className="text-gray-400 font-medium">
            Governance & operational control
          </p>
        </div>

      </div>


      {/*  right */}
      <div className="flex items-center gap-8">
        {/* notification */}
        <button className="relative text-slate-500 hover:text-blue-600">
          <Bell size={26} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-white"></span>
        </button>

        {/* profile */}
        <img
          src="https://i.pravatar.cc/100"
          alt="Admin Profile"
          className="w-12 h-12 rounded-full border-2 border-purple-300 object-cover"
        />

      </div>

    </div>
  );
}

export default AdminNavbar;