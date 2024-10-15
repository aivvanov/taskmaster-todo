import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Delete, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

function Task({ task, toggleTaskComplete, deleteTask }) {
  return (
    <Card
      sx={{
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        background: task.completed
          ? 'linear-gradient(90deg, rgba(118, 255, 3, 0.3), rgba(0, 176, 255, 0.3))'
          : 'linear-gradient(90deg, rgba(255, 228, 3, 0.3), rgba(255, 125, 0, 0.3))',
      }}
    >
      <IconButton onClick={() => toggleTaskComplete(task.id)} color={task.completed ? 'success' : 'default'}>
        {task.completed ? <CheckCircle /> : <RadioButtonUnchecked />}
      </IconButton>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </Typography>
        <Typography color="textSecondary">{task.category}</Typography>
      </CardContent>
      <IconButton onClick={() => deleteTask(task.id)} color="error">
        <Delete />
      </IconButton>
    </Card>
  );
}

export default Task;