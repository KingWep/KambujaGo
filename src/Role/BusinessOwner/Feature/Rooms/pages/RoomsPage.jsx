import React from 'react';
import Card from '../../../../../components/ui/Card';
import Button from '../../../../../components/ui/Button';
import Badge from '../../../../../components/ui/Badge';
import { BedIcon, PlusIcon } from '../../../../../components/ui/Icons';

/**
 * Rooms Management Page (Product - Stays)
 */
export function RoomsPage() {
  const rooms = [
    { id: 1, name: 'Deluxe Pool Villa', property: 'Angkor Heritage Sanctuary', price: '$120/night', status: 'Active', badgeVariant: 'green' },
    { id: 2, name: 'Royal Suite Room', property: 'Angkor Heritage Sanctuary', price: '$180/night', status: 'Booked', badgeVariant: 'blue' },
    { id: 3, name: 'Superior King Room', property: 'Phnom Penh Luxury Villa', price: '$85/night', status: 'Maintenance', badgeVariant: 'amber' },
  ];

  return (
    <Card
      title="Accommodation & Stays"
      subtitle="Manage your hotel rooms, resort suites, and villas"
      icon={<BedIcon size={20} color="#0066FF" />}
      action={
        <Button variant="primary" size="sm" iconLeft={<PlusIcon size={14} color="#ffffff" />}>
          Add New Room
        </Button>
      }
    >
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {rooms.map((room) => (
          <div
            key={room.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#0F172A' }}>{room.name}</div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>{room.property}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontWeight: 700, color: '#047857', fontSize: '14px' }}>{room.price}</span>
              <Badge variant={room.badgeVariant} size="sm">{room.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RoomsPage;
