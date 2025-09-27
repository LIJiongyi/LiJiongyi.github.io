import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    textAlign: 'center',
  },
  header: {
    width: '100%',
    padding: '20px 0',
    position: 'relative',
    zIndex: 1,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#333',
    border: '1px solid white',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  container: {
    marginTop: '40px',
    maxWidth: '800px',
    padding: '0 20px',
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: '#333',
    padding: '10px 0',
    textAlign: 'center',
  },
  footerP: {
    margin: 0,
    color: 'white',
  },
  italic: {
    fontStyle: 'italic',
    color: '#555',
  },
};

function Home() {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>Welcome to My Personal Website</h1>
        <h2 style={styles.italic}>
          Stay true to your roots, and let your journey be guided by purpose.
        </h2>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/about" style={styles.navLink}>About Me</Link>
          <Link to="/resume" style={styles.navLink}>Resume</Link>
          <Link to="/contact" style={styles.navLink}>Contact Me</Link>
        </nav>
      </header>

      <div style={styles.container}>
        <section id="about">
          <h2>My Home</h2>
          <p>The site belongs to Li Jiongyi, a PolyU UG Computer Science student.</p>
          <p>More content will be issued.</p>
        </section>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerP}>
          Copyright © 2024 Li Jiongyi's life. All Rights Reserved.
        </p>
        <p style={styles.footerP}>
          Li Jiongyi reserves the final right to interpret the content of this website.{' '}
          <Link to="/" style={{ color: '#fff', textDecoration: 'underline' }}>
            Home Page of This Website
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Home;