
import  {Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
const LoginForm=()=>{
    const [email,setEmail]=useState("");
     const [pass,setPass]=useState("");
    return(
        <Box p={3}

        style={
            {
                display:'flex',
                flexDirection:'column',
                gap:'20px'
            }
        }
        
        >
            <TextField variant='outlined' type='email' label='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
            <TextField variant='outlined' type='password' label='Enter Password' onChange={(e)=>setPass(e.target.value)}/>
            <Button variant='contained' size='large'>Login</Button>
        </Box>
    )
}

export default LoginForm;