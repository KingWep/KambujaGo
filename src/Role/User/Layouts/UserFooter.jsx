import { Link } from "react-router-dom";

function UserFooter() {
  return (
    <footer className="kg-footer">
      <div className="kg-container kg-footer-row">
        <p>&copy; {new Date().getFullYear()} Kampuja Go. All rights reserved.</p>
        <nav className="kg-footer-links" aria-label="Footer">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/destinations">Destinations</Link>
        </nav>
      </div>
    </footer>
  );
}

export default UserFooter;
