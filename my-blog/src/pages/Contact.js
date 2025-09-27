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
  contactInfo: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '600px',
  },
  contactItem: {
    marginBottom: '10px',
    fontSize: '1rem',
  },
  contactSpan: {
    fontWeight: 'bold',
    marginRight: '8px',
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

function Contact() {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>Welcome to contact me.</h1>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/about" style={styles.navLink}>About Me</Link>
          <Link to="/resume" style={styles.navLink}>Resume</Link>
          <Link to="/contact" style={styles.navLink}>Contact Me</Link>
        </nav>
      </header>

      <div style={styles.container}>
        <h1>Contact Information</h1>
        <ul style={styles.contactInfo}>
          <li style={styles.contactItem}>
            <span style={styles.contactSpan}>Github:</span>
            <a href="https://github.com/LIJiongyi" target="_blank" rel="noopener noreferrer">
              https://github.com/LIJiongyi
            </a>
          </li>
          <li style={styles.contactItem}>
            <span style={styles.contactSpan}>LinkedIn:</span>
            <a href="https://www.linkedin.com/in/jiongyi-li-07939a292/" target="_blank" rel="noopener noreferrer">
              https://www.linkedin.com/in/jiongyi-li-07939a292/
            </a>
          </li>
          <li style={styles.contactItem}>
            <span style={styles.contactSpan}>Email:</span>
            <a href="mailto:ljyworkemail@gmail.com">ljyworkemail@gmail.com</a>
          </li>
          <li style={styles.contactItem}>
            <span style={styles.contactSpan}>WeChat:</span> ljy04041016
          </li>
          <li style={styles.contactItem}>
            <span style={styles.contactSpan}>QQ:</span> 1924148097
          </li>
          <li style={styles.contactItem}>
            <span style={styles.contactSpan}>Steam:</span>
            <a href="https://steamcommunity.com/profiles/76561199490213039/" target="_blank" rel="noopener noreferrer">
              https://steamcommunity.com/profiles/76561199490213039/
            </a>
          </li>
          <li style={styles.contactItem}>
            <span style={styles.contactSpan}>Discord:</span> johnnydsddfv
          </li>
        </ul>
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

export default Contact;