import { useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, User, CalendarCheck, Heart, Star, Settings, LogOut } from "lucide-react";
import useClickOutside from "./useClickOutside";

export const profileLinks = [
  { to: "/profile", label: "My Profile", icon: User },
  { to: "/my-bookings", label: "My Bookings", icon: CalendarCheck },
  { to: "/favorites", label: "My Favorites", icon: Heart },
  { to: "/reviews", label: "My Reviews", icon: Star },
  { to: "/settings", label: "Settings", icon: Settings },
];

function UserDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const close = useCallback(() => setOpen(false), []);
  useClickOutside(ref, close, open);

  const handleLogout = () => {
    close();
    navigate("/");
  };

  return (
    <div className="kg-dropdown" ref={ref}>
      <button
        type="button"
        className="kg-avatar-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="kg-avatar">U</span>
        <ChevronDown size={16} className={`kg-chevron ${open ? "is-open" : ""}`} />
      </button>

      {open && (
        <div className="kg-menu" role="menu">
          {profileLinks.map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to} role="menuitem" className="kg-menu-item" onClick={close}>
              <Icon size={18} /> {label}
            </Link>
          ))}
          <div className="kg-menu-divider" />
          <button type="button" role="menuitem" className="kg-menu-item kg-danger" onClick={handleLogout}>
            <LogOut size={18} /> Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
