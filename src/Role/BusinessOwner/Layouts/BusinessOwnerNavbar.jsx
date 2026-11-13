import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BellIcon,
  MenuIcon,
  ChevronDownIcon,
  LogOutIcon,
  SettingsIcon,
  UsersIcon,
} from '../../../components/ui/Icons';
import './BusinessOwner.css';


export function BusinessOwnerNavbar({
  pageTitle = 'Dashboard',
  pageSubtitle = 'Host operations overview',
  onOpenMobile = () => {},
  notifications = [
    {
      id: 1,
      title: 'Booking Confirmed!',
      desc: 'Stay at Angkor Heritage Sanctuary (Ref: KG-2026-8891)',
      time: '10m ago',
      unread: true,
    },
    {
      id: 2,
      title: 'New Message from Guest',
      desc: 'Vannek Sok replied regarding airport pickup inquiry.',
      time: '1h ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Fleet Dispatch Complete',
      desc: 'Vehicle #4 completed Siem Reap round-trip.',
      time: '3h ago',
      unread: false,
    },
  ],
  user = {
    name: 'KimSan',
    role: 'Host / Business Owner',
    email: 'kimsan@kambujago.com',
  },
  onLogout = () => {},
  extraActions = null,
}) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="bo-navbar" aria-label="Top Navigation Bar">
      <div className="bo-navbar-left">
        <button
          type="button"
          onClick={onOpenMobile}
          className="bo-mobile-menu-btn"
          aria-label="Open Navigation Menu"
        >
          <MenuIcon size={24} color="#0f172a" />
        </button>

        <div className="bo-page-title-box">
          <h1>{pageTitle}</h1>
          {pageSubtitle && <p>{pageSubtitle}</p>}
        </div>
      </div>

      <div className="bo-navbar-right">
        <NavLink
          to="/admin"
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#0066FF',
            backgroundColor: '#EFF6FF',
            border: '1px solid #BFDBFE',
            padding: '6px 12px',
            borderRadius: '999px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
          title="Switch to Admin Governance Portal"
        >
          <span>🛡️ Admin Portal</span>
        </NavLink>

        {extraActions}

        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileDropdownOpen(false);
            }}
            className="bo-nav-action-btn"
            aria-label="Notifications"
            title="Notifications"
          >
            <BellIcon size={20} color="#475569" />
            {unreadCount > 0 && <span className="bo-notification-dot" />}
          </button>

          {notificationsOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                marginTop: '10px',
                width: '320px',
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                padding: '12px',
                zIndex: 100,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '10px',
                  borderBottom: '1px solid #f1f5f9',
                  marginBottom: '8px',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f172a' }}>
                  Notifications
                </div>
                {unreadCount > 0 && (
                  <span
                    style={{
                      fontSize: '11px',
                      backgroundColor: '#eff6ff',
                      color: '#1d4ed8',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      fontWeight: 700,
                    }}
                  >
                    {unreadCount} new
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      backgroundColor: n.unread ? '#f8fafc' : 'transparent',
                      borderLeft: n.unread ? '3px solid #0066FF' : '3px solid transparent',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#0f172a',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{n.title}</span>
                      <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 400 }}>
                        {n.time}
                      </span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      {n.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => {
              setProfileDropdownOpen(!profileDropdownOpen);
              setNotificationsOpen(false);
            }}
            className="bo-navbar-profile-btn"
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#0066FF',
                color: '#ffffff',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
              }}
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                marginRight: '2px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.2,
                }}
              >
                {user.name}
              </span>
              <span style={{ fontSize: '11px', color: '#64748b' }}>
                {user.role}
              </span>
            </div>
            <ChevronDownIcon
              size={14}
              color="#64748b"
              style={{
                transform: profileDropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>

          {profileDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                marginTop: '10px',
                width: '240px',
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                border: '1px solid #e2e8f0',
                padding: '8px',
                zIndex: 100,
              }}
            >
              <div
                style={{
                  padding: '8px 12px 10px',
                  borderBottom: '1px solid #f1f5f9',
                  marginBottom: '6px',
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                  {user.name}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  {user.email}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '13px',
                    color: '#334155',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <UsersIcon size={16} color="#64748b" />
                  <span>Profile Overview</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '13px',
                    color: '#334155',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <SettingsIcon size={16} color="#64748b" />
                  <span>Business Settings</span>
                </button>

                <div style={{ height: '1px', backgroundColor: '#f1f5f9', margin: '4px 0' }} />

                <button
                  type="button"
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    onLogout();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '13px',
                    color: '#ef4444',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fef2f2')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <LogOutIcon size={16} color="#ef4444" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default BusinessOwnerNavbar;

