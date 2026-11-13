import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DashboardIcon,
  OrderIcon,
  StatisticIcon,
  BedIcon,
  FleetIcon,
  CalendarIcon,
  UsersIcon,
  MessageIcon,
  StarIcon,
  SettingsIcon,
  LogOutIcon,
  DoubleChevronLeftIcon,
  DoubleChevronRightIcon,
  CheckCircleIcon,
  CloseIcon,
} from '../../../components/ui/Icons';
import './BusinessOwner.css';

export function BusinessOwnerSidebar({
  activeKey = 'dashboard',
  onSelectKey = () => {},
  collapsed = false,
  onToggleCollapse = () => {},
  isMobileOpen = false,
  onCloseMobile = () => {},
  brandName = 'TravelGo',
  user = {
    name: 'KimSan',
    role: 'Host / Business Owner',
    verified: true,
    avatar: null,
  },
  onLogout = () => {},
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuSections = [
    {
      title: 'Operations',
      items: [
        { key: 'dashboard', label: 'Dashboard', path: '/business-owner/dashboard', icon: DashboardIcon },
        { key: 'order', label: 'Order', path: '/business-owner/orders', icon: OrderIcon, badge: '2' },
        { key: 'statistic', label: 'Statistic', path: '/business-owner/statistics', icon: StatisticIcon },
      ],
    },
    {
      title: 'Inventory & Fleet',
      items: [
        { key: 'stays', label: 'Product (Stays)', path: '/business-owner/stays', icon: BedIcon },
        { key: 'fleet', label: 'Fleet (Rides)', path: '/business-owner/fleet', icon: FleetIcon },
        { key: 'calendar', label: 'Calendar', path: '/business-owner/calendar', icon: CalendarIcon },
      ],
    },
    {
      title: 'Management',
      items: [
        { key: 'customers', label: 'Customers', path: '/business-owner/customers', icon: UsersIcon },
        { key: 'messages', label: 'Messages', path: '/business-owner/messages', icon: MessageIcon, badge: '1' },
        { key: 'reviews', label: 'Reviews', path: '/business-owner/reviews', icon: StarIcon },
        { key: 'settings', label: 'Settings', path: '/business-owner/settings', icon: SettingsIcon },
      ],
    },
  ];

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
    onSelectKey(item.key);
    if (isMobileOpen) {
      onCloseMobile();
    }
  };

  return (
    <aside
      className={`bo-sidebar ${collapsed ? 'is-collapsed' : ''} ${
        isMobileOpen ? 'is-mobile-open' : ''
      }`}
      aria-label="Sidebar Navigation"
    >
      <button
        type="button"
        onClick={onToggleCollapse}
        className="bo-sidebar-toggle-tab"
        title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        {collapsed ? (
          <DoubleChevronRightIcon size={14} color="#ffffff" />
        ) : (
          <DoubleChevronLeftIcon size={14} color="#ffffff" />
        )}
      </button>

      <div className="bo-sidebar-header">
        <div className="bo-header-avatar-ring" title={user.name}>
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <span>{user.name ? user.name.charAt(0).toUpperCase() : 'K'}</span>
          )}
        </div>

        {!collapsed && (
          <div className="bo-header-info">
            <span className="bo-brand-title">{brandName}</span>
            <div className="bo-user-subtitle">
              <span>Hello, {user.name}</span>
              {user.verified && (
                <span title="Verified">
                  <CheckCircleIcon size={14} color="#93c5fd" />
                </span>
              )}
            </div>
          </div>
        )}

        {isMobileOpen && (
          <button
            type="button"
            onClick={onCloseMobile}
            style={{
              marginLeft: 'auto',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CloseIcon size={22} color="#ffffff" />
          </button>
        )}
      </div>

      <nav className="bo-sidebar-nav">
        {menuSections.map((section, sIdx) => (
          <div key={sIdx} style={{ marginBottom: '10px' }}>
            {!collapsed && (
              <div className="bo-nav-section-title">{section.title}</div>
            )}
            <ul className="bo-nav-list">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.path
                  ? location.pathname === item.path ||
                    (item.path === '/business-owner/dashboard' &&
                      (location.pathname === '/business-owner' ||
                        location.pathname === '/business-owner/'))
                  : activeKey === item.key;

                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className={`bo-nav-item-btn ${
                        isActive ? 'is-active' : ''
                      }`}
                      title={collapsed ? item.label : undefined}
                    >
                      <span className="bo-nav-icon">
                        <Icon
                          size={20}
                          color={isActive ? '#0066FF' : '#FFFFFF'}
                        />
                      </span>
                      {!collapsed && (
                        <>
                          <span className="bo-nav-label">{item.label}</span>
                          {item.badge && (
                            <span className="bo-nav-badge">{item.badge}</span>
                          )}
                        </>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="bo-sidebar-footer">
        <button
          type="button"
          onClick={onLogout}
          className="bo-logout-btn"
          title={collapsed ? 'Sign Out' : undefined}
        >
          <span className="bo-nav-icon">
            <LogOutIcon size={20} color="#ffffff" />
          </span>
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}

export default BusinessOwnerSidebar;

