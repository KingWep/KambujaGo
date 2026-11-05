import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarButton({ icon: Icon, title, active,isSidebarOpen ,to}) {
    return (
        <NavLink
            to={to}
            className={({isActive})=>
            `flex items-center gap-3 mt-1 w-full px-3 py-3 rounded-2xl transition-all
        ${isActive
                // active true jenh ah ler , active fall jenh ah krom
            ? 'bg-blue-600 text-white text-sm hover:bg-blue-500 hover:text-white'
            : 'text-gray-200 font-bold text-sm bg-blue-600 hover-text-white hover:cursor-pointer'
        }`}
    >
        <Icon className="w-5 h-5 shrink-0" />

        {isSidebarOpen && (
            <span className="font-medium">
                {title}
            </span>
)}
    </NavLink>
    )
}

export default SidebarButton