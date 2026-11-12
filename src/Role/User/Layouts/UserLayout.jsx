import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import "./user.css";

function UserLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="kg-app">
      <UserNavbar />
      <main className="kg-main">
        <Outlet />
      </main>
      <UserFooter />
    </div>
  );
}

export default UserLayout;
