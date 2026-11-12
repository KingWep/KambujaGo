import { Link } from "react-router-dom";
import { ArrowRight, Hotel, Bike, Car } from "lucide-react";
import heroBanner from "../../../../../assets/images/hero-banner.jpg";

const quickLinks = [
  { to: "/hotels", label: "Hotels", text: "Stay somewhere great", icon: Hotel },
  { to: "/motorides", label: "MotoRides", text: "Ride at your own pace", icon: Bike },
  { to: "/car-rental", label: "Car Rental", text: "Travel in comfort", icon: Car },
];

function HomePage() {
  return (
    <>
      <section className="kg-hero" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="kg-hero-overlay" />
        <div className="kg-container kg-hero-content">
          <h1 className="kg-hero-title">Explore the Kingdom of Wonder</h1>
          <p className="kg-hero-text">
            From Angkor Wat to the southern islands, book hotels, rides and
            rentals for your Cambodian adventure in one place.
          </p>
          <div className="kg-hero-actions">
            <Link to="/destinations" className="kg-btn kg-btn-accent">
              Explore Destinations <ArrowRight size={18} />
            </Link>
            <Link to="/hotels" className="kg-btn kg-btn-light">
              Find Hotels
            </Link>
          </div>
        </div>
      </section>

      <section className="kg-page">
        <div className="kg-container">
          <div className="kg-card-grid">
            {quickLinks.map(({ to, label, text, icon: Icon }) => (
              <Link key={to} to={to} className="kg-card">
                <span className="kg-page-icon"><Icon size={24} /></span>
                <h3>{label}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
