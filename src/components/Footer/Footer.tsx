import React from "react";
import { Col, Container, Stack } from "react-bootstrap";
import { ReactComponent as Logo } from '../../@types/assets/hatchr-icon.svg';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <Container className="footer-container">
        <Stack gap={3} direction="horizontal">
          <Col>
            <Logo height="40px" />
          </Col>
          <Col>
            <p>slay</p>
          </Col>
          <Col>
            <p>links</p>
          </Col>
        </Stack>
      </Container>
    </div>
  );
}

export default Footer;