import React from 'react';
import { TextField, MenuItem, Box, InputAdornment } from '@mui/material';
import { FilterList } from '@mui/icons-material';

function CategoryFilter({ category, onCategoryChange }) {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <TextField
        select
        label="Filter by Category"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FilterList />
            </InputAdornment>
          ),
        }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Personal">Personal</MenuItem>
        <MenuItem value="Work">Work</MenuItem>
        <MenuItem value="Others">Others</MenuItem>
      </TextField>
    </Box>
  );
}

export default CategoryFilter;