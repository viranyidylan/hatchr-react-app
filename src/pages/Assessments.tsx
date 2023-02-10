import React from "react";
import { Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";

const tasks: string[] = ["task 1: something about react or javascript or blah blah blah blah ", "task2"];

function Assessments() {
    return (
        <div className="home-page">
            <div className="assessment-page-background">
                <div className="assessment-page-container">
                    <Stack>
                        <Row className="assessment-page-title">
                            <h1>Coding tasks <span>page</span>.</h1>
                        </Row>
                        <Row className="assessment-page-subtitle">
                            <h3>blah blah blah</h3>
                            <h3>lalalallalaa</h3>
                            <h3>etc</h3>
                        </Row>
                        <Row>
                            <Stack gap={2}>
                                {
                                    tasks.map((task, key) => {

                                        return (
                                            <Link key={key} to='/'>
                                                <TaskCard title={task}/>
                                            </Link>
                                        )

                                    })
                                }
                            </Stack>
                            
                        </Row>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default Assessments;