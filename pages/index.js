import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Association of Turks in Bulgaria</title>
      </Head>
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>ASSOCIATION OF TURKS IN BULGARIA</h1>
        <p>Preserving heritage, strengthening community</p>
        <button className="cta">Join the Movement</button>
      </header>
      <main>
        <section className="features">
          <div>
            <h2>Our Story</h2>
            <p>Learn about our journey and commitment to the Bulgarian Turkish community.</p>
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>We celebrate Turkish culture and support Turkish Bulgarians in the UK.</p>
          </div>
          <div>
            <h2>Get Involved</h2>
            <p>Discover ways to contribute and engage with our vibrant efforts.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>info@bulgaristanturcks.org.uk</p>
      </footer>
    </div>
  );
}
