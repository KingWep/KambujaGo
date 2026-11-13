import React from 'react';

/**
 * Reusable Badge Component
 * @param {('blue'|'green'|'amber'|'red'|'neutral'|'white')} variant
 * @param {('sm'|'md')} size
 * @param {React.ReactNode} children
 */
export function Badge({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
  dot = false,
  ...props
}) {
  const variantStyles = {
    blue: {
      backgroundColor: '#EFF6FF',
      color: '#1D4ED8',
      border: '1px solid #BFDBFE',
    },
    green: {
      backgroundColor: '#ECFDF5',
      color: '#047857',
      border: '1px solid #A7F3D0',
    },
    amber: {
      backgroundColor: '#FFFBEB',
      color: '#B45309',
      border: '1px solid #FDE68A',
    },
    red: {
      backgroundColor: '#FEF2F2',
      color: '#B91C1C',
      border: '1px solid #FECACA',
    },
    neutral: {
      backgroundColor: '#F1F5F9',
      color: '#475569',
      border: '1px solid #E2E8F0',
    },
    white: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#FFFFFF',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
  };

  const sizeStyles = {
    sm: {
      padding: '2px 8px',
      fontSize: '11px',
    },
    md: {
      padding: '4px 10px',
      fontSize: '12px',
    },
  };

  const dotColors = {
    blue: '#2563EB',
    green: '#10B981',
    amber: '#F59E0B',
    red: '#EF4444',
    neutral: '#64748B',
    white: '#FFFFFF',
  };

  return (
    <span
      className={`ui-badge inline-flex items-center gap-1.5 rounded-full font-semibold leading-tight ${className}`}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      {...props}
    >
      {dot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: dotColors[variant] || '#2563EB',
            display: 'inline-block',
          }}
        />
      )}
      {children}
    </span>
  );
}

export default Badge;

