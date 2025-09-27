import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="w-100 py-4 position-relative" style={{ zIndex: 1 }}>
        <h1 className="text-center">My Resume</h1>
        <nav className="d-flex justify-content-center mt-4 gap-3">
          <Link to="/" className="btn btn-dark">Home</Link>
          <Link to="/about" className="btn btn-dark">About Me</Link>
          <Link to="/resume" className="btn btn-dark">Resume</Link>
          <Link to="/contact" className="btn btn-dark">Contact Me</Link>
        </nav>
      </header>

      <Container className="my-4">
        <h1 className="text-center">Li Jiongyi</h1>

        <Card className="mb-4">
          <Card.Header as="h2">Education</Card.Header>
          <Card.Body>
            <Card.Title><strong>BSc in Computing & AI</strong></Card.Title>
            <Card.Text>
              The Hong Kong Polytechnic University<br />
              2022 - 2026
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h2">Work Experience</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <h3>Research Assistant</h3>
              <p><strong>Huazhong University of Science and Technology, Medical Image Research Center</strong><br />
                May 2023 - July 2023<br />
                - Deep learning research assistant, labeling recognition for human organ identification (Internship)
              </p>
            </div>

            <div className="mb-3">
              <h3>Backend Developer Intern</h3>
              <p><strong>Shanghai Great Wall Broadband Co., Ltd.</strong><br />
                May 2024 - July 2024 (Internship)<br />
                - Debugging and completing minor requirements for the admin backend of a Changkuan customer paying service built with Maven and Springboot. Changing the amount of money users pay for broadband from large to small to small to large
              </p>
            </div>

            <div className="mb-3">
              <h3>Intern</h3>
              <p><strong>Wuhan Bainazhi Technology Co., Ltd.</strong><br />
                August 2024 (Internship)<br />
                - Providing support for mini-game development using the Unreal and Cocos game engine and assisting with iOS game testing.
              </p>
            </div>

            <div className="mb-3">
              <h3>Backend Developer Intern</h3>
              <p><strong>Vivacity Limited</strong><br />
                July 2025 - August 2025 (Internship)<br />
                - Developed and maintained full-stack features using React with TypeScript and NestJS, implementing Redis caching solutions and Jest unit tests

                Enhanced application functionality by integrating Discord API for community message forwarding and bot interactions

                Assisted in production deployment and operational support for new feature releases
              </p>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h2">Projects</Card.Header>
          <Card.Body>
            <p>fastchat(Java version). A chat-app using SpringBoot, Spring WebSocket, Java Swing and built with Maven</p>
            <p>
              Link: <a href="https://github.com/LIJiongyi/fast-chat_Java" target="_blank" rel="noopener noreferrer">https://github.com/LIJiongyi/fast-chat_Java</a>
            </p>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h2">Extra</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Member of the PolyU NuttyShell CTF Team</ListGroup.Item>
            <ListGroup.Item>Have experience in Java development, Linux, web security, PHP and code auditing</ListGroup.Item>
            <ListGroup.Item>Familiar with Docker deployment</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h2">Awards</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Prize H in the MCM Mathematical Modeling Competition</ListGroup.Item>
            <ListGroup.Item>7th CUHK CTF 2024</ListGroup.Item>
            <ListGroup.Item>10th HKCERT CTF 2024</ListGroup.Item>
            <ListGroup.Item>6th HKUST Firebird CTF 2025</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card className="mb-4">
          <Card.Header>Personal Website</Card.Header>
          <Card.Body>
            <p><a href="http://www.jiongyi.top" target="_blank" rel="noopener noreferrer">www.jiongyi.top</a></p>
            <p><a href="https://github.com/LIJiongyi" target="_blank" rel="noopener noreferrer">https://github.com/LIJiongyi</a></p>
          </Card.Body>
        </Card>
      </Container>

      <footer className="mt-auto py-3 bg-dark text-center text-white">
        <p className="m-0">
          Copyright © 2025 Li Jiongyi's life. All Rights Reserved.
        </p>
        <p className="m-0">
          Li Jiongyi reserves the final right to interpret the content of this website.{' '}
          <Link to="/" className="text-white text-decoration-underline">
            Home Page of This Website
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Resume;