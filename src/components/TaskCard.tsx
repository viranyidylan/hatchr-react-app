import React from 'react';
import { Image, Container, Stack } from 'react-bootstrap';

type props = {
  title: string;
};

function TaskCard({ title }:props) {
  return (
    <Container className="task-card-container">
      <Stack direction='horizontal' gap={3}>
        <Image className="task-icon" src='logo192.png'></Image>
        <h2>{title}</h2>
      </Stack>
    </Container>
  );
}

export default TaskCard;