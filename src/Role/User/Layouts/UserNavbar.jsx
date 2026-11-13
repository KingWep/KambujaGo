import { useState, useCallback } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, CalendarCheck } from "lucide-react";
import UserDropdown from "../Components/UserDropdown";
import NotificationDropdown from "../Components/NotificationDropdown";
import MobileMenu from "../Components/MobileMenu";
import SearchButton from "../../../components/ui/SearchButton";

import logo from "../../../assets/images/kampuja-go-logo.jpg";

export const navLinks = [
  { to: "/", label: "ទំព័រដើម", end: true },
  { to: "/destinations", label: "គោលដៅ" },
  { to: "/hotels", label: "សណ្ឋាគារ" },
  { to: "/motorides", label: "ការជួល ម៉ូតូ" },
  { to: "/car-rental", label: "ការជួល​​ រថយន្ត" },
  { to: "/about", label: "អំពីយើង" },
  { to: "/contact", label: "ទំនាក់ទំនង" },
];

function UserNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleSearch = (text) => {
    const q = text.trim();
    navigate(q ? `/destinations?q=${encodeURIComponent(q)}` : "/destinations");
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className="kg-navbar">
      <div className="kg-container kg-navbar-row">
        <Link to="/" className="kg-brand" onClick={closeMobile} aria-label="Kampuja Go home">
          <img src={logo} alt="Kampuja Go" className="kg-logo" />
          <span className="kg-brand-text">KPJG</span>
        </Link>

        <nav className="kg-links" aria-label="Main navigation">
          {navLinks.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `kg-link ${isActive ? "active" : ""}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="kg-actions">
          <button
            type="button"
            className="kg-icon-btn"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
          <NotificationDropdown />
          <Link to="/my-bookings" className="kg-bookings-btn">
            <CalendarCheck size={18} /> <span>ការកក់ របស់ខ្ញុំ</span>
          </Link>
          <UserDropdown />
          <button
            type="button"
            className="kg-icon-btn kg-hamburger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="kg-search">
          <div className="kg-container kg-search-row">
            <SearchButton
              autoFocus
              showButton
              value={query}
              onChange={setQuery}
              onSubmit={handleSearch}
              placeholder="Search destinations, hotels, rides..."
            />
          </div>
        </div>
      )}

      <MobileMenu open={mobileOpen} links={navLinks} onNavigate={closeMobile} />
    </header>
  );
}

export default UserNavbar;