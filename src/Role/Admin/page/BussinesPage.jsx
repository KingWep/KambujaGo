import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';
import { BuildingIcon, PlusIcon } from '../../../components/ui/Icons';

export function BussinesPage() {
  const businesses = [
    { id: 1, name: 'Angkor Heritage Sanctuary Resort', owner: 'KimSan', category: 'Hotels & Stays', units: '24 Rooms', revenue: '$14,200', status: 'Active' },
    { id: 2, name: 'Siem Reap Express Transport', owner: 'Vannek Sok', category: 'Fleets & Rides', units: '8 Vans', revenue: '$6,800', status: 'Active' },
    { id: 3, name: 'Phnom Penh Luxury Villa Hub', owner: 'Dara Pich', category: 'Villas & Stays', units: '6 Villas', revenue: '$4,150', status: 'Pending Review' },
    { id: 4, name: 'Battambang Eco Shuttle Fleet', owner: 'Sophea Chan', category: 'Shuttle / Bus', units: '3 Shuttles', revenue: '$1,920', status: 'Suspended' },
  ];

  return (
    <div className="space-y-6">
      <Card
        title="Registered Platform Businesses"
        subtitle="Manage business hosts, hotels, resorts, and transportation operators"
        icon={<BuildingIcon size={20} color="#0066FF" />}
        action={
          <Button variant="primary" size="sm" iconLeft={<PlusIcon size={14} color="#ffffff" />}>
            Add Business
          </Button>
        }
      >
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Business Name</th>
                <th className="py-3 px-4">Owner</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Units / Fleet</th>
                <th className="py-3 px-4">Total Revenue</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {businesses.map((biz) => (
                <tr key={biz.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">{biz.name}</td>
                  <td className="py-3.5 px-4 text-slate-600">{biz.owner}</td>
                  <td className="py-3.5 px-4 text-slate-600">{biz.category}</td>
                  <td className="py-3.5 px-4 text-slate-600">{biz.units}</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600">{biz.revenue}</td>
                  <td className="py-3.5 px-4">
                    <Badge
                      variant={
                        biz.status === 'Active'
                          ? 'green'
                          : biz.status === 'Pending Review'
                          ? 'amber'
                          : 'red'
                      }
                      size="sm"
                    >
                      {biz.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default BussinesPage;
