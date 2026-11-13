import { Link } from "react-router-dom";
import { ArrowRight, Hotel, Bike, Car } from "lucide-react";
import heroBanner from "../../../../../assets/images/herobanner.jpg";
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
          <h1 className="kg-hero-title">ស្វែងយល់ពីនគរអច្ឆរិយៈ</h1>
          <p className="kg-hero-text Kantumruy Pro font">
           ចាប់ពីប្រាសាទអង្គរវត្ត រហូតដល់កោះនានានៅភាគខាងត្បូង អ្នកអាចកក់សណ្ឋាគារ សេវាកម្មដឹកជញ្ជូន
            និងសេវាកម្មជួលផ្សេងៗ សម្រាប់ការធ្វើដំណើរផ្សងព្រេងរបស់អ្នកនៅក្នុងប្រទេសកម្ពុជា បាននៅកន្លែងតែមួយ។
          </p>
          <div className="kg-hero-actions">
            <Link to="/destinations" className="kg-btn kg-btn-accent">
             ស្វែងរកគោលដៅ របស់អ្នក <ArrowRight size={18} />
            </Link>
            <Link to="/hotels" className="kg-btn kg-btn-light">
              ស្វែងរកសណ្ឋាគារ
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
