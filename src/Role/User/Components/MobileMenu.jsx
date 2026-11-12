import { NavLink, Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { profileLinks } from "./UserDropdown";

function MobileMenu({ open, links, onNavigate }) {
  const navigate = useNavigate();
  const linkClass = ({ isActive }) => `kg-mobile-link ${isActive ? "active" : ""}`;

  return (
    <div className={`kg-mobile ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <nav className="kg-mobile-inner">
        {links.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className={linkClass} onClick={onNavigate} tabIndex={open ? 0 : -1}>
            {label}
          </NavLink>
        ))}

        <div className="kg-mobile-section">Account</div>
        {profileLinks.map(({ to, label, icon: Icon }) => (
          <Link key={to} to={to} className="kg-mobile-link" onClick={onNavigate} tabIndex={open ? 0 : -1}>
            <Icon size={18} /> {label}
          </Link>
        ))}
        <button
          type="button"
          className="kg-mobile-link kg-danger"
          tabIndex={open ? 0 : -1}
          onClick={() => {
            onNavigate();
            navigate("/");
          }}
        >
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </div>
  );
}

export default MobileMenu;
