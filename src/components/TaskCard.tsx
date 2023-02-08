import React from 'react';
import { Image, Container, Stack } from 'react-bootstrap';

function TaskCard() {
  return (
    <Container className="task-card-container">
      <Stack direction='horizontal' gap={3}>
        <Image className="task-icon" src='logo192.png'></Image>
        <h2>Task 1: Something about JavaScript!</h2>
      </Stack>
    </Container>
  );
}

export default TaskCard;