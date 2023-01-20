import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function Home() {
    return (
        <div className="home-page">
            <div className="home-page-background-1">
                <div className="home-page-container-1">
                    <Row className="home-page-title">
                        <h1>Software engineering interviews are <span style={{color: "#de1867"}}>broken</span>. Hatchr is fixing the process.</h1>
                    </Row>
                    <Row className="home-page-subtitle">
                        <h2>Hatchr is the platform for you to find your next software engineering job. 
                        Forget studying for coding whiteboards, memorising obscure algorithms questions and bragging about what university you went to. We focus on what actually matters for software engineering - your ability to build things with code.</h2>
                    </Row>
                    <Row className="button-box">
                        <Col>
                            <Button id="btn-custom-primary" variant="primary">
                                <h2>Get started</h2>
                            </Button>
                        </Col>
                        <Col>
                            <Button id="btn-custom-secondary" variant="secondary">
                                <h2>See coding tasks</h2>
                            </Button>
                        </Col>
                    </Row>
                </div>
                <div className="home-page-container-2">

                </div>
            </div>
        </div>
    );
}

export default Home;