import React from 'react';
import { Image, Container, Stack } from 'react-bootstrap';
import "./TaskCard.css";


const taskUrl = "https://github.com/viranyidylan/intermediate-react-task";

function TaskCard({ task }) {

  let icon;

  if(task.tech === "Angular") {
    icon = <Image className="task-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"></Image>;
  } else if(task.tech === "React") {
    icon = <Image className="task-icon" src="logo192.png"></Image>;
  } else if(task.tech === "Node") {
    icon = <Image className="task-icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"></Image>;
  }

  // switch(task.tech) {
  //   case "Angular":
  //     icon = <Image className="task-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"></Image>;
  //   case "React":
  //     icon = <Image className="task-icon" src="logo192.png"></Image>;
  // }

  return (
    <Container className="task-card-container">
      <Stack direction='horizontal' gap={3}>

        {icon}

        {task.available
        ? <h3><a href={task.link} target="_blank" rel="noopener noreferrer">{task.name}</a></h3>
        : <h3><div>{task.name} (coming soon)</div></h3>
        }
      </Stack>
    </Container>
  );
}

export default TaskCard;