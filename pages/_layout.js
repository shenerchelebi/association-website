
export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>Association of Turks in Bulgaria</h1>
        <nav style={{ marginTop: '1rem' }}>
          <a href="/" style={{ marginRight: '1rem' }}>Home</a>
          <a href="/about" style={{ marginRight: '1rem' }}>About</a>
          <a href="/events" style={{ marginRight: '1rem' }}>Events</a>
          <a href="/join" style={{ marginRight: '1rem' }}>Join</a>
          <a href="/donate" style={{ marginRight: '1rem' }}>Donate</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666' }}>
        © 2025 Association of Turks in Bulgaria. All rights reserved.
      </footer>
    </div>
  );
}
