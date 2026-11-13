import React from 'react';
import Card from '../../../components/ui/Card';

/**
 * Reusable Business Alerts Component (matching Image 2)
 */
export function BusinessAlerts({
  alerts = [
    {
      id: 1,
      title: 'Booking Confirmed!',
      description: 'Your stay at Angkor Heritage Sanctuary Resort (Ref: KG-2026-8891) is confirmed for Oct 15-18.',
      time: '09:20 PM',
      borderColor: '#0066FF',
    },
    {
      id: 2,
      title: 'New Message from Host',
      description: 'Vannek Sok replied regarding your airport pickup inquiry.',
      time: '11:00 PM',
      borderColor: '#10B981',
    },
  ],
  onViewAll = () => {},
}) {
  return (
    <Card
      title="Business Alerts"
      subtitle="Live dispatch notifications and customer inquiries"
      action={
        <button
          type="button"
          onClick={onViewAll}
          style={{
            fontSize: '12px',
            color: '#0066FF',
            fontWeight: 600,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          View All
        </button>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
        {alerts.map((alert) => (
          <div
            key={alert.id}
            style={{
              padding: '12px',
              borderRadius: '10px',
              backgroundColor: '#F8FAFC',
              borderLeft: `4px solid ${alert.borderColor || '#0066FF'}`,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#0F172A' }}>
              {alert.title}
            </div>
            <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
              {alert.description}
            </div>
            <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>
              {alert.time}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default BusinessAlerts;

