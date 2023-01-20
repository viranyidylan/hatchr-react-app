import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function Companies() {
    return (
        <div className="home-page">
            <div className="home-page-background-1">
                <div className="home-page-container-1">
                    <Row className="home-page-title">
                        <h1>Access to South Africa's <span style={{color: "#de1867"}}>top developers</span>.</h1>
                    </Row>
                    <Row className="home-page-subtitle">
                        <h3>Drastically reduce time to hire and skip the CV screening stage. </h3>
                        <h3>Developers have been screened based on their skill, not their background. </h3>
                        <h3>Hatchr connects you to candidates with the most relevant skills to your hiring needs.</h3>
                    </Row>
                    <Row className="button-box">
                        <Col>
                            <Button id="btn-custom-primary" variant="primary">
                                <h3>Get in touch</h3>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Companies;