function PageContainer({ icon: Icon, title, description, children }) {
  return (
    <section className="kg-page">
      <div className="kg-container">
        <header className="kg-page-header">
          {Icon && (
            <span className="kg-page-icon">
              <Icon size={28} />
            </span>
          )}
          <h1 className="kg-page-title">{title}</h1>
          <p className="kg-page-desc">{description}</p>
        </header>
        {children ?? (
          <div className="kg-placeholder">
            <p>This page is ready for its content. Booking features will be added next.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PageContainer;
