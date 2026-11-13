import React from 'react';

/**
 * Reusable Card Component
 */
export function Card({
  children,
  title,
  subtitle,
  action,
  icon,
  className = '',
  style = {},
  padding = '20px',
  ...props
}) {
  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    padding: padding,
    transition: 'all 0.2s ease',
    ...style,
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: title || subtitle || action ? '16px' : '0',
    gap: '12px',
  };

  const titleWrapStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  return (
    <div style={cardStyle} className={`ui-card ${className}`} {...props}>
      {(title || subtitle || action) && (
        <div style={headerStyle} className="ui-card-header">
          <div style={titleWrapStyle}>
            {icon && <span className="ui-card-icon">{icon}</span>}
            <div>
              {title && (
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#0F172A',
                    margin: 0,
                  }}
                >
                  {title}
                </h3>
              )}
              {subtitle && (
                <p
                  style={{
                    fontSize: '12px',
                    color: '#64748B',
                    margin: '3px 0 0 0',
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {action && <div className="ui-card-action">{action}</div>}
        </div>
      )}
      <div className="ui-card-body">{children}</div>
    </div>
  );
}

export default Card;

