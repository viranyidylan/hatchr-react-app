import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function Assessments() {
    return (
        <div className="home-page">
            <div className="home-page-background-1">
                <div className="home-page-container-1">
                    <Row className="home-page-title">
                        <h1>Coding tasks <span style={{color: "#de1867"}}>page</span>.</h1>
                    </Row>
                    <Row className="home-page-subtitle">
                        <h3>blah blah blah </h3>
                        <h3>lalalallalaa </h3>
                        <h3>etc</h3>
                    </Row>
                    <Row className="button-box">
                        <Col>
                            <Button id="btn-custom-primary" variant="primary">
                                <h3>Apply!</h3>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Assessments;