import React from "react";
import { Col, Container, Stack } from "react-bootstrap";
import { ReactComponent as Logo } from '../../@types/assets/hatchr-icon.svg';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <Container className="footer-container">
        <Stack gap={5} direction="horizontal">
          <Logo height="40px"/>
        </Stack>
      </Container>
    </div>
  );
}

export default Footer;