import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { ReactComponent as Image1 } from '../@types/assets/code.svg';
import { ReactComponent as Image2 } from '../@types/assets/report.svg';
import { ReactComponent as Image3 } from '../@types/assets/chat.svg';
import { ReactComponent as Image4 } from '../@types/assets/electric.svg';

function Home() {
    return (
        <div className="home-page">
            <div className="home-page-background-1">
                <div className="home-page-container-1">
                    <Row className="home-page-title">
                        <h1>Software engineering interviews are <span style={{color: "#de1867"}}>broken</span>. Hatchr is fixing the process.</h1>
                    </Row>
                    <Row className="home-page-subtitle">
                        <h3>
                            Hatchr is the platform for you to find your next software engineering job. 
                            Forget studying for coding whiteboards, memorising obscure algorithms questions and bragging about what university you went to. 
                            We focus on what actually matters for software engineering - your ability to build things with code.
                        </h3>
                    </Row>
                    <Row className="button-box">
                        <Col className="button-col">
                            <Button id="btn-custom-primary" variant="primary">
                                <h3>Get started</h3>
                            </Button>
                        </Col>
                        <Col className="button-col">
                            <Button id="btn-custom-secondary" variant="secondary">
                                <h3>See coding tasks</h3>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="home-page-background-2">
                <div className="home-page-container-2">
                    <Stack gap={5}>
                        <Row>
                            <Col>
                                <Stack gap={4}>
                                    <Image1 />
                                    <h2 className="left">Complete a coding task to join top developers</h2>
                                    <p>
                                        Pick up one of our coding tasks to showcase your skills 
                                        and become a member of our professional network of software developers. 
                                        Our assessments aren't meant to trick you or catch you out. 
                                        We want to see you doing your best work with the languages and tools you're most comfortable.
                                    </p>
                                </Stack>
                            </Col>
                            <Col>
                                <Stack gap={4}>
                                    <Image2 />
                                    <h2>Let your skills do the talking</h2>
                                    <p>
                                        Hatchr shifts the focus away from prestigious credentials, background or personal branding, 
                                        and onto what really matters: your technical skills.
                                    </p>
                                </Stack>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Stack gap={4}>
                                    <Image3 />
                                    <h2>Speak directly to companies</h2>
                                    <p>
                                        We help developers find jobs at awesome companies. 
                                        Companies contact you directly, no dealing with third-party recruiters 
                                        (who don't even know the difference between Java and JavaScript 🤮)
                                    </p>
                                </Stack>
                            </Col>
                            <Col>
                                <Stack gap={4}>
                                    <Image4 />
                                    <h2>Streamline your job search</h2>
                                    <p>
                                        Stop sending your resume to different job boards and wondering if you'll hear back. 
                                        Hatchr allows you to conduct your job search on one platform, 
                                        and connects you with companies that are specifically interested in the skills you've demonstrated.
                                    </p>
                                </Stack>
                            </Col>
                        </Row>
                    </Stack>
                </div>
            </div>

            <div className="home-page-background-2">
                <div className="home-page-container-3">
                    <Row className="home-page-title">
                        <h1>Frequently asked questions</h1>
                    </Row>
                    <Stack gap={4}>
                        <Row>
                            <Row className="faq-heading">
                                <h2>How does it work?</h2>
                            </Row>
                            <Row>
                                <p>
                                    Taking one of our coding tasks gets you into the Hatchr platform. 
                                    We review your submission and connect you with companies that are looking for developers that match your skills.
                                </p>
                                <p>
                                    If we believe your skills aren't at hatchr level then we provide you with actionable feedback for what we believe you should work on. 
                                    There's no trick to passing hatchr assessments, the way to prepare is to improve your coding ability.
                                </p>
                                <p>
                                    Hit "get started" for instructions on completing and submitting one of our coding tasks.
                                </p>
                            </Row>
                        </Row>

                        <Row>
                            <Row className="faq-heading">
                                <h2>How much does it cost?</h2>
                            </Row>
                            <Row>
                                <p>Hatchr’s process is free for software developers.</p>
                                <p>Companies pay us because we improve their hiring process.</p>
                            </Row>
                        </Row>

                        <Row>
                            <Row className="faq-heading">
                                <h2>When should I pick up the coding task?</h2>
                            </Row>
                            <Row>
                                <p>
                                    You can take a coding task any time, you don’t even have to be actively looking for a job yet. 
                                    Once you’ve submitted the code we’ll reach out to you and find out a bit more about your current status.
                                </p>
                            </Row>
                        </Row>

                        <Row>
                            <Row className="faq-heading">
                                <h2>Why hatchr? 🐣</h2>
                            </Row>
                            <Row>
                                <p>
                                    We save you time. 
                                    By fast tracking you to the final stage of interviews with each company you don’t have to go through applications, cover letters and tech screens with each company individually.
                                </p>
                                <p>
                                    We have a network of great companies that we will match you with based on your specific skillset and their requirements.
                                </p>
                                <p>
                                    Companies trust our ability to technically assess candidates and find talent that other recruiters can’t. 
                                    If you’re self taught, or have a nontraditional software development background, we provide you with an opportunity to showcase your skills!
                                </p>
                            </Row>
                        </Row>
                        
                        

                    </Stack>
                    
                
                </div>
            </div>

            <div className="home-page-background-3">
                <div className="home-page-container-4">
                    <Row className="home-page-title">
                        <h1>Ready to find your next software engineering job?</h1>
                    </Row>
                    <Row className="button-box">
                        <Col className="button-col">
                            <Button id="btn-custom-primary" variant="primary">
                                <h3>Get started</h3>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Home;