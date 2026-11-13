import React from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessOwnerHeader from '../Layouts/BusinessOwnerHeader';
import StatsGrid from '../Components/StatsGrid';
import QuickOperations from '../Components/QuickOperations';
import PerformanceComparison from '../Components/PerformanceComparison';
import BusinessAlerts from '../Components/BusinessAlerts';

/**
 * Business Owner Dashboard Page
 *
 * Composes reusable dashboard components:
 * - BusinessOwnerHeader (operations banner)
 * - StatsGrid (8 metric cards)
 * - QuickOperations (actions)
 * - PerformanceComparison & BusinessAlerts (lower grid)
 */
export function BusinessOwnerDashboard() {
  const navigate = useNavigate();

  return (
    <>
      {/* Operations Header Banner from Image 2 */}
      <BusinessOwnerHeader
        badgeText="PARTNER OPERATIONS"
        title="Business Owner Dashboard"
        description="Monitor unified performance across your accommodation and transportation fleet with real-time dispatch and earnings."
        actionText="Create Business"
        onActionClick={() => alert('Create Business modal triggered')}
      />

      {/* KPI Stats Grid */}
      <StatsGrid />

      {/* Quick Operations Row */}
      <QuickOperations
        onAddRoom={() => navigate('/business-owner/stays')}
        onAddVehicle={() => navigate('/business-owner/fleet')}
        onManageCalendar={() => navigate('/business-owner/calendar')}
        onViewBookings={() => navigate('/business-owner/orders')}
      />

      {/* Performance Comparison & Business Alerts */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '20px',
        }}
      >
        <PerformanceComparison
          onViewFinancials={() => navigate('/business-owner/statistics')}
        />
        <BusinessAlerts
          onViewAll={() => navigate('/business-owner/messages')}
        />
      </div>
    </>
  );
}

export default BusinessOwnerDashboard;

