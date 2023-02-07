import React from "react";
import { Row, Stack } from "react-bootstrap";
import TaskCard from "../components/TaskCard";

function Assessments() {
    return (
        <div className="home-page">
            <div className="assessment-page-background">
                <div className="assessment-page-container">
                    <Stack>
                        <Row className="home-page-title">
                            <h1>Coding tasks <span>page</span>.</h1>
                        </Row>
                        <Row className="home-page-subtitle">
                            <h3>blah blah blah </h3>
                            <h3>lalalallalaa </h3>
                            <h3>etc</h3>
                        </Row>
                        <Row>
                            <TaskCard />
                        </Row>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default Assessments;