import { useRef, useState, useCallback } from "react";
import { Bell } from "lucide-react";
import useClickOutside from "./useClickOutside";

const notifications = [
  { id: 1, title: "Booking confirmed", text: "Your hotel in Siem Reap is confirmed." },
  { id: 2, title: "New offer", text: "Save 15% on MotoRides this weekend." },
  { id: 3, title: "Welcome to Kampuja Go", text: "Start exploring destinations." },
];

function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useClickOutside(ref, close, open);

  return (
    <div className="kg-dropdown" ref={ref}>
      <button
        type="button"
        className="kg-icon-btn"
        aria-label="Notifications"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Bell size={20} />
        <span className="kg-badge-dot" />
      </button>

      {open && (
        <div className="kg-menu kg-menu-wide">
          <div className="kg-menu-title">Notifications</div>
          {notifications.map((n) => (
            <div key={n.id} className="kg-notif">
              <strong>{n.title}</strong>
              <span>{n.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;
