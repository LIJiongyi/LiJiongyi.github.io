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
};

function About() {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>This is me</h1>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/about" style={styles.navLink}>About Me</Link>
          <Link to="/resume" style={styles.navLink}>Resume</Link>
          <Link to="/contact" style={styles.navLink}>Contact Me</Link>
        </nav>
      </header>

      <div style={styles.container}>
        <h1>About Me</h1>
        <p>
          I am glad to meet you. I am a 21-year-old undergraduate student in Computing & AI at the Hong Kong Polytechnic University. I have a passion for everything related to computers.
        </p>
        <p className="hobbies"><strong>Hobbies:</strong></p>
        <p>
          I enjoy daydreaming, basketball, motorsports and Counter Strike. I love experiencing all the beautiful things in life.
        </p>
        <p>
          I have explored many professional directions, and now I am interested in computer security and full stack development. Recently, I have been enthusiastically participating in CTF events with my friends from PolyU.
        </p>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerP}>
          Copyright © 2025 Li Jiongyi's life. All Rights Reserved.
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

export default About;