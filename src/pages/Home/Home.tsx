import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import { ReactComponent as Image1 } from '../../@types/assets/code.svg';
import { ReactComponent as Image2 } from '../../@types/assets/report.svg';
import { ReactComponent as Image3 } from '../../@types/assets/chat.svg';
import { ReactComponent as Image4 } from '../../@types/assets/electric.svg';
import './Home.css';

const width = "30px";
const height = "30px";

function Home() {
    return (
        <div className="home-page">
            <div className="home-page-background-1">
                <div className="home-page-container-1">
                    <Stack>
                        <Row className="home-page-title">
                            <h1>Find your next software engineering job with <span>hatchr</span>.</h1>
                        </Row>
                        <Row className="home-page-subtitle">
                            <h3>
                              Traditional tech recruitment methods are outdated. At hatchr we're doing things differently.
                            </h3>
                            <h3>
                              Forget whiteboards, obscure algorithms, and constant CV tweaking - let your technical skills speak for themselves.
                            </h3>
                        </Row>
                        <Row className="button-box">
                            <Col className="button-col">
                                <Stack direction="horizontal" gap={4}>
                                    <Button id="btn-custom-primary" variant="primary" href="/assessments">
                                        <h3>Get started</h3>
                                    </Button>
                                    <Button id="btn-custom-secondary" variant="secondary" href="/assessments">
                                        <h3>See coding tasks</h3>
                                    </Button>
                                </Stack>
                                
                            </Col>
                        </Row>
                    </Stack>
                </div>
            </div>

            <div className="home-page-background-2">
                <div className="home-page-container-2">
                    <Stack gap={4}>
                        <Row>
                            <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image1 width="40px" height={height}/>
                                    <h2 className="left">Take an assessment to start</h2>
                                    <p>
                                    Showcase your skills through a coding task and join our professional network of software developers. 
                                    We're not here to trick or catch you out with our assessments; 
                                    we want to see your best work, using the tools you feel most comfortable with.
                                    </p>
                                </Stack>
                            </Col>
                            <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image3 width={width} height={height}/>
                                    <h2>Speak directly to companies</h2>
                                    <p>
                                        We help developers find jobs at awesome companies. 
                                        No need to deal with third-party recruiters (who don't even understand the difference between Java and JavaScript 🤮).
                                        At hatchr, companies reach out to you directly.
                                    </p>
                                </Stack>
                            </Col>

                        </Row>
                        <Row>
                        <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image2 width={width} height={height}/>
                                    <h2>Let your skills speak for you</h2>
                                    <p>
                                    At hatchr, we shift the focus from background or personal branding, tricky algorithm questions and prestigious credentials to what actually matters: 
                                    your technical skills.
                                    </p>
                                </Stack>
                            </Col>

                            <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image4 width={width} height={height}/>
                                    <h2>Simplify your job search process</h2>
                                    <p>
                                    Hatchr streamlines your job search by connecting you with companies specifically interested in your demonstrated skills. 
                                    No more sending resumes to multiple job boards and hoping for a response.
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
                                    Taking one of our coding tasks gets you into the hatchr platform. 
                                    We review your submission and connect you with companies that are looking for developers with skills that match yours.
                                </p>
                                <p>
                                If we believe your skills aren't at the hatchr level, we provide you with actionable feedback on what we think you should work on. 
                                There's no trick to passing hatchr assessments; the way to prepare is to improve your coding ability.
                                </p>
                                <p>
                                Click "get started" for instructions on completing and submitting one of our coding tasks.
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
                                You can take a coding task at any time; you don’t even have to be actively looking for a job yet. 
                                Once you’ve submitted the code, we’ll reach out to you and find out more about your current status.
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
                                By fast-tracking you to the final stage of interviews with each company, you don’t have to go through applications, cover letters, and tech screens with each company individually.
                                </p>
                                <p>
                                We have a network of great companies that we will match you with based on your specific skillset and their requirements.
                                </p>
                                <p>
                                Companies trust our ability to technically assess candidates and find talent that other recruiters can't. 
                                If you’re self-taught or have a nontraditional software development background, we provide you with an opportunity to showcase your skills!
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
                            <Button id="btn-custom-primary" variant="primary" href="/assessments">
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
