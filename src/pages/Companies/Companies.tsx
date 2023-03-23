import React from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { ReactComponent as Image1 } from '../../@types/assets/performance.svg';
import { ReactComponent as Image2 } from '../../@types/assets/savemoney.svg';
import { ReactComponent as Image3 } from '../../@types/assets/stack.svg';
import { ReactComponent as Image4 } from '../../@types/assets/database.svg';
import { ReactComponent as Image5 } from '../../@types/assets/time.svg';
import { ReactComponent as Image6 } from '../../@types/assets/engineers.svg';
import './Companies.css';

const width = "30px";
const height = "30px";

function Companies() {
    return (
        <div className="company-page">
            <div className="company-page-background">
                <div className="company-page-container">
                    <Stack>
                        <Row className="company-page-title">
                            <h1>Streamline your tech hiring with <span>hatchr</span>.</h1>
                        </Row>
                        <Row className="company-page-subtitle">
                            <Stack gap={3}>
                                <h3>Connect with pre-screened software engineers who have demonstrated their technical skills on
                                    real-world work sample tasks.</h3>
                            </Stack>
                        </Row>
                        <Row className="company-button-box">
                            <Col className="company-button-col">
                                <Button id="btn-custom-primary" variant="primary">
                                    <h3>Get in touch</h3>
                                </Button>
                                <Form className="email-entry">
                                    <Form.Control type="email" placeholder="yourname@company.com" />
                                </Form>
                            </Col>
                        </Row>
                    </Stack>
                    
                </div>
            </div>
            <div className="company-page-background-2">
                <div className="company-page-container-2">
                    <Stack gap={4}>
                        <Row>
                            <Col >
                                <Stack className="company-page-col" gap={4}>
                                    <Image1 width={width} height={height}/>
                                    <h2 className="left">Assess candidates with practical work-sample test feedback</h2>
                                    <p>
                                        Our assessments evaluate candidates based on the fundamentals and indentify engineers with the skills you're hiring for,
                                        including those from nontraditional backgrounds.
                                    </p>
                                </Stack>
                            </Col>
                            <Col >
                                <Stack className="company-page-col" gap={4}>
                                    <Image5 width={width} height={height}/>
                                    <h2>Avoid interviewing underqualified candidates</h2>
                                    <p>
                                        Using our service, companies save their engineers from wasting time in interviews with candidates who are not qualified for the role.
                                    </p>
                                </Stack>
                            </Col>

                        </Row>
                        <Row>
                            <Col >
                                <Stack className="company-page-col" gap={4}>
                                    <Image2 width={width} height={height}/>
                                    <h2>Pay only for successful hires</h2>
                                    <p>
                                      Our service uses a pay-per-hire model, so connecting with and interviewing candidates is free.
                                    </p>
                                </Stack>
                            </Col>
                            <Col >
                                <Stack className="company-page-col" gap={4}>
                                    <Image3 width={width} height={height}/>
                                    <h2>Framework specific assessments that reflect your company's tech stack</h2>
                                    <p>
                                        We have a range of assessments to match the tech stack your company uses, and we keep adding more.
                                    </p>
                                </Stack>
                            </Col>

                        </Row>
                        <Row>
                            <Col >
                                <Stack className="company-page-col" gap={4}>
                                    <Image6 width={width} height={height}/>
                                    <h2>Built by and for software engineers</h2>
                                    <p>
                                        We understand that sourcing and hiring software engineers is a specific and technical process that
                                        requires domain knowledge and skill.
                                    </p>
                                </Stack>
                            </Col>
                            <Col >
                                <Stack className="company-page-col" gap={4}>
                                    <Image4 width={width} height={height}/>
                                    <h2>Access a pool of skilled software engineers prepared for interviews</h2>
                                    <p>
                                        Our service connects you with skilled software engineers who are eager to interview for open positions.
                                    </p>
                                </Stack>
                            </Col>
                        </Row>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default Companies;

