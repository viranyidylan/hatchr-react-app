import React from "react";
import { Container } from "react-bootstrap";

function Home() {
    return (
        <div className="home-page">
            <div className="home-page-container-1">
                <Container className="home-page-title">
                    <h1>Software engineering interviews are broken. Hatchr is fixing the process.</h1>
                </Container>
                <Container className="home-page-subtitle">
                    <h3>Hatchr is the platform for you to find your next software engineering job. 
                    Forget studying for coding whiteboards, memorising obscure algorithms questions and bragging about what university you went to. We focus on what actually matters for software engineering - your ability to build things with code.</h3>
                </Container>
            </div>
        </div>
    );
}

export default Home