import { Box, Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function FilterForm({filterQuery,setFilterQuery}) {
console.log("filterQuery",filterQuery)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilterQuery({ ...filterQuery, [name]: value });
      };
    
      const handleDateChange = (date) => {
        setFilterQuery({ ...filterQuery, dob: date });
      };
  return (
    <Box style={{maxWidth:'1500px',margin:'auto',textAlign:'left'}}>
        <h4  >Filter user</h4>
        <Grid sx={{
        '& .MuiTextField-root': {  width: '30ch' },
      }} container spacing={2}>
        <Grid item xs={4}>
          <TextField
            
            label="First Name"
            name="name"
            value={filterQuery.name}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
              select
              label="Gender "
             
              name="gender"
              value={filterQuery.gender}
              onChange={handleInputChange}
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
              <MenuItem value="other">other</MenuItem>
              
            
          </TextField>
        </Grid>

        <Grid item xs={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DatePicker']}>
        
         <DatePicker
          label="DOB"
          value={filterQuery.dob}
          onChange={(newValue) => handleDateChange(newValue)}
         />
         </DemoContainer>
       </LocalizationProvider>

        </Grid>

        </Grid>
    </Box>
  )
}

export default FilterForm