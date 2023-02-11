import React from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";

function Companies() {
    return (
        <div className="home-page">
            <div className="company-page-background">
                <div className="company-page-container">
                    <Stack>
                        <Row className="home-page-title">
                            <h1>Access to South Africa's <span>top developers</span>.</h1>
                        </Row>
                        <Row className="home-page-subtitle">
                            <Stack gap={3}>
                                <h3>Drastically reduce time to hire and skip the CV screening stage. </h3>
                                <h3>Developers have been screened based on their skill, not their background. </h3>
                                <h3>Hatchr connects you to candidates with the most relevant skills to your hiring needs.</h3>
                            </Stack>
                        </Row>
                        <Row className="company-button-box">
                            <Col className="company-button-col">
                                <Button id="btn-custom-primary" variant="primary">
                                    <h3>Get in touch</h3>
                                </Button>
                                <Form className="email-entry">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form>
                            </Col>
                        </Row>
                    </Stack>
                    
                </div>
            </div>
        </div>
    );
}

export default Companies;