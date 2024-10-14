import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import CategoryFilter from './components/CategoryFilter';
import { Container, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { AssignmentTurnedIn, Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState('All');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4(), completed: false }]);
  };

  const toggleTaskComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const filteredTasks = category === 'All'
    ? tasks
    : tasks.filter(task => task.category === category);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <AssignmentTurnedIn sx={{ marginRight: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TaskMaster
          </Typography>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <TaskForm addTask={addTask} />
        <CategoryFilter category={category} onCategoryChange={handleCategoryChange} />
        <ul>
          {filteredTasks.map(task => (
            <Task
              key={task.id}
              task={task}
              toggleTaskComplete={toggleTaskComplete}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </Container>
    </ThemeProvider>
  );
}

export default App;
