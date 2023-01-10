import React from "react";
import { Row } from "react-bootstrap";

function Home() {
    return (
        <div className="home-page">
            <div className="home-page-container-1">
                <Row className="home-page-title">
                    <h1>Software engineering interviews are <span style={{color: "#f70462"}}>broken</span>. Hatchr is fixing the process.</h1>
                </Row>
                <Row className="home-page-subtitle">
                    <h2>Hatchr is the platform for you to find your next software engineering job. 
                    Forget studying for coding whiteboards, memorising obscure algorithms questions and bragging about what university you went to. We focus on what actually matters for software engineering - your ability to build things with code.</h2>
                </Row>
            </div>
        </div>
    );
}

export default Home;