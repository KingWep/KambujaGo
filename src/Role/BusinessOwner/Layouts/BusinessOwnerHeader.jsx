import React from 'react';
import { PlusIcon } from '../../../components/ui/Icons';
import { Button } from '../../../components/ui/Button';

/**
 * Reusable Business Owner Operations Header Banner (matching Image 2)
 */
export function BusinessOwnerHeader({
  badgeText = 'PARTNER OPERATIONS',
  title = 'Business Owner Dashboard',
  description = 'Monitor unified performance across your accommodation and transportation fleet with real-time dispatch and earnings.',
  actionText = 'Create Business',
  onActionClick = () => {},
  showAction = true,
  className = '',
  style = {},
}) {
  const containerStyle = {
    backgroundColor: '#064e3b',
    backgroundImage: 'linear-gradient(135deg, #064e3b 0%, #065f46 60%, #047857 100%)',
    borderRadius: '16px',
    padding: '24px 28px',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    boxShadow: '0 4px 15px rgba(6, 78, 59, 0.2)',
    marginBottom: '24px',
    ...style,
  };

  return (
    <div style={containerStyle} className={`bo-header-banner ${className}`}>
      <div style={{ maxWidth: '680px' }}>
        {badgeText && (
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6ee7b7',
              marginBottom: '6px',
            }}
          >
            {badgeText}
          </div>
        )}
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 800,
            margin: '0 0 8px 0',
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              fontSize: '13px',
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.85)',
              margin: 0,
            }}
          >
            {description}
          </p>
        )}
      </div>

      {showAction && (
        <div>
          <Button
            variant="secondary"
            size="md"
            iconLeft={<PlusIcon size={16} color="#ffffff" />}
            onClick={onActionClick}
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              borderRadius: '9999px',
              padding: '10px 20px',
              fontWeight: 700,
              border: 'none',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
            }}
          >
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );
}

export default BusinessOwnerHeader;

