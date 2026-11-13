
import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarButton({ icon: Icon, title, isSidebarOpen, to }) {
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) =>
                `relative flex items-center gap-3 w-full px-2.5 py-3 mt-1 transition-all duration-200
                ${
                    isActive
                        ? 'bg-white text-blue-600 font-semibold rounded-2xl'
                        : 'mr-3 text-gray-200 font-bold rounded-2xl hover:bg-blue-500 hover:text-white'
                }`
            }
        >
            <Icon className="w-5 h-5 shrink-0" />

            {isSidebarOpen && (
                <span className="font-medium">{title}</span>
            )}
        </NavLink>
    )
}

export default SidebarButton
