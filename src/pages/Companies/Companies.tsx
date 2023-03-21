import React from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { ReactComponent as Image1 } from '../../@types/assets/performance.svg';
import { ReactComponent as Image2 } from '../../@types/assets/savemoney.svg';
import { ReactComponent as Image3 } from '../../@types/assets/stack.svg';
import { ReactComponent as Image4 } from '../../@types/assets/database.svg';
import { ReactComponent as Image5 } from '../../@types/assets/time.svg';
import { ReactComponent as Image6 } from '../../@types/assets/engineers.svg';
import './Companies.css';

const width = "36px";
const height = "36px";

function Companies() {
    return (
        <div className="home-page">
            <div className="company-page-background">
                <div className="company-page-container">
                    <Stack>
                        <Row className="home-page-title">
                            <h1>Streamline your tech hiring with <span>hatchr</span>.</h1>
                        </Row>
                        <Row className="home-page-subtitle">
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
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form>
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
                                    <Image1 width={width} height={height}/>
                                    <h2 className="left">Access top-performing candidates with practical assessment feedback</h2>
                                    <p>
                                        Our assessments evaluate the skills and abilities of potential candidates and indentify engineers with the skills you're looking for,
                                        including engineers with nontraditional backgrounds. 
                                    </p>
                                </Stack>
                            </Col>
                            <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image2 width={width} height={height}/>
                                    <h2>Pay only for successful hires</h2>
                                    <p>
                                        Our service operates on a pay-per-hire model. Connecting with and interviewing candidates is free.
                                    </p>
                                </Stack>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image3 width={width} height={height}/>
                                    <h2>Framework specific assessments that reflect your company's tech stack</h2>
                                    <p>
                                        We have a range of assessments to match the tech stack your company uses, ensuring 
                                        a good fit for the role.
                                    </p>
                                </Stack>
                            </Col>
                            <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image4 width={width} height={height}/>
                                    <h2>Access a pool of highly-skilled software engineers who are eager to interview</h2>
                                    <p>
                                        Our service gives users access to a pool of highly-skilled software engineers who are eager to interview
                                        for open positions, saving time and effort in the recruitment process.
                                    </p>
                                </Stack>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image5 width={width} height={height}/>
                                    <h2>Save your engineers from wasting time interviewing insufficiently skilled candidates</h2>
                                    <p>
                                        By using our service, companies can avoid wasting time and resources on interviewing candidates who aren't qualified for the role.
                                    </p>
                                </Stack>
                            </Col>
                            <Col >
                                <Stack className="home-page-col" gap={4}>
                                    <Image6 width={width} height={height}/>
                                    <h2>Built by and for software engineers</h2>
                                    <p>
                                        We understand that sourcing and hiring software engineers is a specific and technical process that
                                        requires domain knowledge and skill.
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

