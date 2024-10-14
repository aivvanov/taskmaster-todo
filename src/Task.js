import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Delete, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

function Task({ task, toggleTaskComplete, deleteTask }) {
  return (
    <Card sx={{ margin: '10px 0', display: 'flex', alignItems: 'center', padding: '10px' }}>
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