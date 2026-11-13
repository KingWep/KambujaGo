import React from 'react';
import Card from '../../../../../components/ui/Card';
import Button from '../../../../../components/ui/Button';
import Badge from '../../../../../components/ui/Badge';
import { FleetIcon, PlusIcon } from '../../../../../components/ui/Icons';

export function TransportPage() {
  const vehicles = [
    { id: 1, model: 'Toyota Alphard (VIP Van)', plate: '2BC-9981', driver: 'Sokha Meng', status: 'On Trip', badgeVariant: 'blue' },
    { id: 2, model: 'Hyundai Staria (11-Seater)', plate: '2AD-3312', driver: 'Dara Chan', status: 'Available', badgeVariant: 'green' },
    { id: 3, model: 'Ford Transit Bus', plate: '3B-1190', driver: 'Vireak Pov', status: 'Maintenance', badgeVariant: 'amber' },
  ];

  return (
    <Card
      title="Fleet & Transportation"
      subtitle="Manage your vehicles, rental cars, and driver dispatch"
      icon={<FleetIcon size={20} color="#059669" />}
      action={
        <Button variant="secondary" size="sm" iconLeft={<PlusIcon size={14} color="#ffffff" />}>
          Add Vehicle
        </Button>
      }
    >
      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {vehicles.map((v) => (
          <div
            key={v.id}
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
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#0F172A' }}>{v.model}</div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>Plate: {v.plate} • Assigned Driver: {v.driver}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Badge variant={v.badgeVariant} size="sm">{v.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TransportPage;
