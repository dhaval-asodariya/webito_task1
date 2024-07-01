import React, { useEffect, useState } from "react";
import {Box, Button, Drawer, FormControl, Grid, InputLabel, MenuItem, Select, TextField,Autocomplete, FormControlLabel, Radio, FormLabel, RadioGroup} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const countries = [
    'United States', 'Canada', 'Mexico', 'India', 'China', 'Australia', 'Germany', 'France', 'Italy', 'Spain'
  ];

function AddUserDrawer({isDrawerOpen,toggleDrawer,setAllData,allData,editingData,editIndex,nextIndex,setNextIndex,setEditIndex}) {
    const [formValues, setFormValues] = useState({
        firstName: '',
        middleName:  '',
        lastName:  '',
        phoneNumber:'',
        dob: null,
        email: '',
        gender: '',
        linkedin: '',
        country: null,
        maritalStatus: '',
      });
      useEffect(()=>{
        editingData&& setFormValues({
            firstName:editingData?.firstName || '',
        middleName: editingData?.middleName ||'',
        lastName: editingData?.lastName ||'',
        phoneNumber: editingData?.phoneNumber ||'',
        dob: null,
        email: editingData?.email ||'',
        gender: editingData?.gender ||'',
        linkedin: editingData?.linkedin ||'',
        country: editingData?.country || null,
        maritalStatus: editingData?.maritalStatus ||'',
        })
      },[editingData])
console.log(formValues)
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleDateChange = (date) => {
        setFormValues({ ...formValues, dob: date });
      };
      const handleReset = () => {
        setFormValues({
          firstName: '',
          middleName: '',
          lastName: '',
          phoneNumber: '',
          dob: null,
          email: '',
          gender: '',
          linkedin: '',
          country: null,
          maritalStatus: '',
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if(editIndex !== null){
            const copydata = [...allData]
            copydata[editIndex]= formValues
            setAllData(copydata)
        }
       else{
        setAllData((priv)=>{
          const newData = {...formValues, "id":nextIndex}
            return [...priv,newData]
        })
        const newIndex = nextIndex;
        setNextIndex(newIndex + 1);
       }
        console.log('Form submitted:', formValues);
        console.log('Form submitted:', allData);
        handleReset();
        setEditIndex(null);
      };
      const handleEdit= (index)=>{

      }
      function handleDrawerclose(){
        toggleDrawer(false);
        handleReset();
      }

  return (
    <div >
     
      <Drawer  open={isDrawerOpen} onClose={handleDrawerclose}>
        
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
               '& .MuiTextField-root': {m:1,width: '30ch' },
               padding:'20px',
               maxWidth:'600px'
            }}>
            <h2 >Enter a new user</h2>
            {/* <Box>
               <TextField id="outlined-basic" label="First Name" variant="outlined" />
               <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
            </Box> */}
             <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Middle Name"
            name="middleName"
            value={formValues.middleName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            type="number"
            value={formValues.phoneNumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DatePicker']}>
        
         <DatePicker
          label="DOB"
          value={formValues.dob}
          onChange={(newValue) => handleDateChange(newValue)}
         />
         </DemoContainer>
       </LocalizationProvider>

        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="LinkedIn Profile"
            name="linkedin"
            type="url"
            value={formValues.linkedin}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            fullWidth
            options={countries}
            getOptionLabel={(option) => option}
            value={formValues.country}
            onChange={(event, newValue) => {
              setFormValues({ ...formValues, country: newValue });
            }}
            renderInput={(params) => <TextField {...params} label="Country" helperText="Please select your country"/>}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
              select
              label="maritalStatus "
              helperText="Please select your maritalStatus"
              name="maritalStatus"
              value={formValues.maritalStatus}
              onChange={handleInputChange}
            >
              <MenuItem value="single">Single</MenuItem>
              <MenuItem value="married">Married</MenuItem>
              <MenuItem value="divorced">Divorced</MenuItem>
              <MenuItem value="widowed">Widowed</MenuItem>
            
          </TextField>
        </Grid>
        {/* <Grid item xs={6} /> */}
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" color="secondary" onClick={handleReset}>
            Reset
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
       
      </Grid>
          </Box>
        
        
      </Drawer>
    </div>
  );
}

export default AddUserDrawer;
