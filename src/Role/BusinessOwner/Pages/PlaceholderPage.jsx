import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

export function PlaceholderPage({ title, description, icon = null }) {
  const navigate = useNavigate();

  return (
    <Card title={title} subtitle={description} icon={icon} padding="32px">
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>
          {icon ? icon : '📂'}
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', margin: '0 0 8px 0' }}>
          {title} Module
        </h3>
        <p style={{ color: '#64748B', fontSize: '14px', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
          {description || 'This feature is ready to be implemented with your business logic and backend endpoints.'}
        </p>
        <Button variant="primary" size="md" onClick={() => navigate('/business-owner/dashboard')}>
          Back to Dashboard
        </Button>
      </div>
    </Card>
  );
}

export default PlaceholderPage;

