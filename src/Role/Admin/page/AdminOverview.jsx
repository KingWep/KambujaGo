import React from 'react';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

/**
 * Admin Dashboard Overview (rendered at /admin)
 */
export function AdminOverview() {
  const kpis = [
    { label: 'Total Platform Revenue', value: '$48,290', change: '+14.2%', variant: 'green' },
    { label: 'Active Business Partners', value: '128', change: '+8 new', variant: 'blue' },
    { label: 'Pending Verifications', value: '7', change: 'Action needed', variant: 'amber' },
    { label: 'Monthly Active Bookings', value: '1,420', change: '+22.5%', variant: 'green' },
  ];

  const recentPartners = [
    { id: 1, name: 'Angkor Heritage Sanctuary', type: 'Stays / Resort', status: 'Approved', location: 'Siem Reap', date: '2026-10-28' },
    { id: 2, name: 'Siem Reap Express Fleets', type: 'Transportation / Van', status: 'Approved', location: 'Siem Reap', date: '2026-10-25' },
    { id: 3, name: 'Phnom Penh Luxury Villa', type: 'Stays / Villa', status: 'Pending Approval', location: 'Phnom Penh', date: '2026-11-02' },
    { id: 4, name: 'Battambang Eco Shuttle', type: 'Transportation / Bus', status: 'Under Review', location: 'Battambang', date: '2026-11-04' },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <Card key={idx} padding="20px">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {kpi.label}
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-2 mb-1">
              {kpi.value}
            </div>
            <div className="text-xs">
              <Badge variant={kpi.variant} size="sm">{kpi.change}</Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Business Partners Table */}
      <Card
        title="Recent Partner Applications"
        subtitle="Businesses requesting verification on KambujaGo"
      >
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Business Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Province</th>
                <th className="py-3 px-4">Date Applied</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentPartners.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">{p.name}</td>
                  <td className="py-3.5 px-4 text-slate-600">{p.type}</td>
                  <td className="py-3.5 px-4 text-slate-600">{p.location}</td>
                  <td className="py-3.5 px-4 text-slate-500 text-xs">{p.date}</td>
                  <td className="py-3.5 px-4">
                    <Badge
                      variant={p.status === 'Approved' ? 'green' : 'amber'}
                      size="sm"
                    >
                      {p.status}
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

export default AdminOverview;

