import React from 'react';
import Card from '../../../components/ui/Card';
import { StarIcon } from '../../../components/ui/Icons';


export function StatsGrid({
  stats = {
    totalBusinesses: 4,
    activeListings: 3,
    pendingApproval: 1,
    totalBookings: 2,
    todayOrders: 0,
    totalRevenue: 293,
    totalCustomers: 1,
    averageRating: 5.0,
    totalReviews: 1,
  },
}) {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <Card padding="20px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Total Businesses</span>
            <span style={{ color: '#8B5CF6' }}>🏢</span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', margin: '8px 0 4px' }}>
            {stats.totalBusinesses}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B' }}>
            Properties & Fleet hubs
          </div>
        </Card>

        <Card padding="20px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Active Listings</span>
            <span style={{ color: '#10B981' }}>✅</span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', margin: '8px 0 4px' }}>
            {stats.activeListings}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B' }}>
            Live on marketplace
          </div>
        </Card>

        <Card padding="20px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Pending Approval</span>
            <span style={{ color: '#F59E0B' }}>⏱️</span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#F59E0B', margin: '8px 0 4px' }}>
            {stats.pendingApproval}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B' }}>
            Admin review status
          </div>
        </Card>

        <Card padding="20px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Total Bookings</span>
            <span style={{ color: '#3B82F6' }}>📅</span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', margin: '8px 0 4px' }}>
            {stats.totalBookings}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B' }}>
            0 pending action
          </div>
        </Card>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '28px',
        }}
      >
        <Card padding="20px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Today's Orders</span>
            <span style={{ color: '#10B981' }}>📈</span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', margin: '8px 0 4px' }}>
            {stats.todayOrders}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B' }}>
            Arriving / dispatching today
          </div>
        </Card>

        <Card padding="20px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Total Revenue</span>
            <span style={{ color: '#10B981', fontWeight: 700 }}>$</span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#047857', margin: '8px 0 4px' }}>
            ${stats.totalRevenue}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B' }}>
            Gross booking value
          </div>
        </Card>

        <Card padding="20px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Total Customers</span>
            <span style={{ color: '#6366F1' }}>👥</span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', margin: '8px 0 4px' }}>
            {stats.totalCustomers}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B' }}>
            Verified guests & drivers
          </div>
        </Card>

        <Card padding="20px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Average Rating</span>
            <span style={{ color: '#F59E0B' }}>⭐</span>
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#0F172A',
              margin: '8px 0 4px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {stats.averageRating.toFixed(1)} <StarIcon size={20} color="#F59E0B" />
          </div>
          <div style={{ fontSize: '12px', color: '#64748B' }}>
            {stats.totalReviews} reviews
          </div>
        </Card>
      </div>
    </>
  );
}

export default StatsGrid;

