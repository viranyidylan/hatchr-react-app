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
    { name: "React task I : 0-2 years of professional experience)", available: true, link: "https://github.com/hatchr-assessments/junior-react-assessment", tech: "React" },
    { name: "React task II (3-5 years of professional experience)", available: true, link: "https://github.com/hatchr-assessments/junior-react-assessment", tech: "React" },
    { name: "React task III (6 or more years of professional experience)", available: false, link: "https://github.com/hatchr-assessments/senior-react-assessment", tech: "React" },
    { name: "Angular task I (0-2 years of professional experience)", available: true, link: "https://github.com/hatchr-assessments/junior-angular-assessment", tech: "Angular" },
    { name: "Angular task II (3-5 years of professional experience)", available: true, link: "https://github.com/hatchr-assessments/intermediate-angular-assessment", tech: "Angular" },
    // { name: "Angular task  III (6 or more years of professional experience)"", available: false, link: "", tech: "Angular" },
    { name: "Node.js task II (3-5 years of professional experience)", available: false, link: "", tech: "Node" },
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