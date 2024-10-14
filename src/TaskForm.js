import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, InputAdornment } from '@mui/material';
import { Add, Create } from '@mui/icons-material';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask({ text, category });
      setText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ margin: '20px 0', display: 'flex', gap: 2 }}>
      <TextField
        label="Add a new task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Create />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        variant="outlined"
        sx={{ width: 150 }}
      >
        <MenuItem value="Personal">Personal</MenuItem>
        <MenuItem value="Work">Work</MenuItem>
        <MenuItem value="Others">Others</MenuItem>
      </TextField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<Add />}
        sx={{
          height: '56px',
        }}
      >
        Add
      </Button>
    </Box>
  );
}

export default TaskForm;