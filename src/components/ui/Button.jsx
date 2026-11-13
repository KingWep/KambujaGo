import React from 'react';

/**
 * Reusable Button Component
 * @param {('primary'|'secondary'|'white'|'outline'|'ghost'|'danger')} variant
 * @param {('sm'|'md'|'lg')} size
 * @param {boolean} fullWidth
 * @param {React.ReactNode} iconLeft
 * @param {React.ReactNode} iconRight
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  className = '',
  style = {},
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '10px',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s ease',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    width: fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
  };

  const sizeStyles = {
    sm: {
      padding: '6px 12px',
      fontSize: '13px',
      height: '34px',
    },
    md: {
      padding: '8px 16px',
      fontSize: '14px',
      height: '40px',
    },
    lg: {
      padding: '12px 24px',
      fontSize: '15px',
      height: '46px',
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#0066FF',
      color: '#FFFFFF',
      boxShadow: '0 2px 6px rgba(0, 102, 255, 0.25)',
    },
    secondary: {
      backgroundColor: '#059669',
      color: '#FFFFFF',
      boxShadow: '0 2px 6px rgba(5, 150, 105, 0.25)',
    },
    white: {
      backgroundColor: '#FFFFFF',
      color: '#0066FF',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#0066FF',
      border: '1.5px solid #0066FF',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#475569',
      border: 'none',
    },
    danger: {
      backgroundColor: '#EF4444',
      color: '#FFFFFF',
      boxShadow: '0 2px 6px rgba(239, 68, 68, 0.25)',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`ui-btn ${className}`}
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {iconLeft && <span className="btn-icon-left">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="btn-icon-right">{iconRight}</span>}
    </button>
  );
}

export default Button;

