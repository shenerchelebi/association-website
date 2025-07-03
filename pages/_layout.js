
export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f9f9f9" }}>
      <header style={{ backgroundColor: "#154360", color: "white", padding: "2rem", textAlign: "center" }}>
        <img src="/logo.png" alt="Logo" style={{ height: "60px" }} />
        <h1 style={{ marginTop: "1rem" }}>Association of Turks in Bulgaria</h1>
        <nav style={{ marginTop: "1rem" }}>
          <a href="/" style={{ color: "white", marginRight: "1rem" }}>Home</a>
          <a href="/about" style={{ color: "white", marginRight: "1rem" }}>About</a>
          <a href="/events" style={{ color: "white", marginRight: "1rem" }}>Events</a>
          <a href="/join" style={{ color: "white", marginRight: "1rem" }}>Join</a>
          <a href="/donate" style={{ color: "white", marginRight: "1rem" }}>Donate</a>
          <a href="/contact" style={{ color: "white" }}>Contact</a>
        </nav>
      </header>
      <main style={{ padding: "2rem" }}>
        <img src="/hero-placeholder.png" alt="Hero" style={{ width: "100%", borderRadius: "10px", marginBottom: "2rem" }} />
        {children}
      </main>
      <footer style={{ textAlign: "center", padding: "1rem", backgroundColor: "#ddd", fontSize: "0.8rem" }}>
        © 2025 Association of Turks in Bulgaria. All rights reserved.
      </footer>
    </div>
  );
}
