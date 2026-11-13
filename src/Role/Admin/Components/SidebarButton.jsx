import React from 'react';
import { NavLink } from 'react-router-dom';

function SidebarButton({ icon: Icon, title, isSidebarOpen, to }) {
  return (
    <NavLink
      to={to}
      end={to === '/admin'}
      className={({ isActive }) =>
        `flex items-center gap-3 mt-1 w-full px-3 py-3 rounded-2xl transition-all ${
          isActive
            ? 'bg-blue-700 text-white text-sm font-semibold shadow-sm'
            : 'text-blue-100 font-medium text-sm hover:bg-blue-500/30 hover:text-white'
        }`
      }
    >
      <Icon className="w-5 h-5 shrink-0" />

      {isSidebarOpen && (
        <span className="font-medium whitespace-nowrap">
          {title}
        </span>
      )}
    </NavLink>
  );
}

export default SidebarButton;
