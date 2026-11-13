import React from 'react';
import { BedIcon, FleetIcon, CalendarIcon, OrderIcon } from '../../../components/ui/Icons';

export function QuickOperations({
  onAddRoom = () => {},
  onAddVehicle = () => {},
  onManageCalendar = () => {},
  onViewBookings = () => {},
}) {
  const operations = [
    {
      id: 'add-room',
      title: 'Add Room',
      subtitle: 'Manage stay units',
      icon: BedIcon,
      bgColor: '#EFF6FF',
      iconColor: '#0066FF',
      onClick: onAddRoom,
    },
    {
      id: 'add-vehicle',
      title: 'Add Vehicle',
      subtitle: 'Expand rental fleet',
      icon: FleetIcon,
      bgColor: '#ECFDF5',
      iconColor: '#047857',
      onClick: onAddVehicle,
    },
    {
      id: 'manage-calendar',
      title: 'Manage Calendar',
      subtitle: 'Block dates & rates',
      icon: CalendarIcon,
      bgColor: '#FAF5FF',
      iconColor: '#7E22CE',
      onClick: onManageCalendar,
    },
    {
      id: 'view-bookings',
      title: 'View Bookings',
      subtitle: '0 need action',
      icon: OrderIcon,
      bgColor: '#F0FDFA',
      iconColor: '#0F766E',
      onClick: onViewBookings,
    },
  ];

  return (
    <div style={{ marginBottom: '28px' }}>
      <div
        style={{
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#64748B',
          marginBottom: '12px',
        }}
      >
        Quick Operations
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
        }}
      >
        {operations.map((op) => {
          const Icon = op.icon;
          return (
            <button
              key={op.id}
              type="button"
              onClick={op.onClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: op.bgColor,
                  color: op.iconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={20} color={op.iconColor} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '13px', color: '#0F172A' }}>
                  {op.title}
                </div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>
                  {op.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickOperations;

