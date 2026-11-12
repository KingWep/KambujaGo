import { useState, useCallback } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, CalendarCheck } from "lucide-react";
import UserDropdown from "../Components/UserDropdown";
import NotificationDropdown from "../Components/NotificationDropdown";
import MobileMenu from "../Components/MobileMenu";

import logo from "../../../assets/images/kampuja-go-logo.jpg";

export const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/destinations", label: "Destinations" },
  { to: "/hotels", label: "Hotels" },
  { to: "/motorides", label: "MotoRides" },
  { to: "/car-rental", label: "Car Rental" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

function UserNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/destinations?q=${encodeURIComponent(q)}` : "/destinations");
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className="kg-navbar">
      <div className="kg-container kg-navbar-row">
        <Link to="/" className="kg-brand" onClick={closeMobile} aria-label="Kampuja Go home">
          <img src={logo} alt="Kampuja Go" className="kg-logo" />
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
            <CalendarCheck size={18} /> <span>My Bookings</span>
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
        <form className="kg-search" onSubmit={handleSearch}>
          <div className="kg-container kg-search-row">
            <Search size={18} />
            <input
              autoFocus
              type="search"
              placeholder="Search destinations, hotels, rides..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="kg-btn kg-btn-primary">Search</button>
          </div>
        </form>
      )}

      <MobileMenu open={mobileOpen} links={navLinks} onNavigate={closeMobile} />
    </header>
  );
}

export default UserNavbar;
