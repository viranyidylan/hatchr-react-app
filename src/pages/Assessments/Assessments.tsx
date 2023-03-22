import React from "react";
import { Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import TaskCard from "../../components/TaskCard/TaskCard";
import './Assessments.css';

class Task {
    name: string;
    available: boolean;
    link: string;
    tech: string;
}

const tasks: Task[] = [
    { name: "React task - junior", available: true, link: "https://github.com/hatchr-assessments/junior-react-assessment", tech: "React" },
    { name: "React task - intermediate", available: true, link: "https://github.com/hatchr-assessments/junior-react-assessment", tech: "React" },
    { name: "React task - senior", available: true, link: "https://github.com/hatchr-assessments/senior-react-assessment", tech: "React" },
    { name: "Angular task - junior", available: true, link: "https://github.com/hatchr-assessments/junior-angular-assessment", tech: "Angular" },
    { name: "Angular task - intermediate", available: true, link: "https://github.com/hatchr-assessments/intermediate-angular-assessment", tech: "Angular" },
    { name: "Angular task - senior", available: false, link: "", tech: "Angular" },
    { name: "Node.js task - intermediate", available: false, link: "", tech: "Node" },
]

function Assessments() {
    return (
        <div className="assessment-page">
            <div className="assessment-page-background">
                <div className="assessment-page-container">
                    <Stack>
                        <Row className="assessment-page-title">
                            <h1>Coding tasks</h1>
                        </Row>
                        <Row className="assessment-page-subtitle">
                            <h3>Click on a coding task below to get started</h3>
                        </Row>
                        <Row>
                            <Stack gap={2}>
                                {
                                    tasks.map((task, key) => {

                                        return (
                                            <TaskCard key={key} task={task}/>
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