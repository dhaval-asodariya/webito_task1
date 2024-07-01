import React from 'react'
import {Button} from '@mui/material';

function Navbar( {toggleDrawer}) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:'1500px',margin:'auto'}}>
       <h3 style={{fontSize:'30px'}}>Webito User CRUD</h3>
       
        <Button  variant="outlined" onClick={()=>toggleDrawer(true)}>Add New User</Button>
    </div>
  )
}

export default Navbar