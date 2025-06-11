
import  {Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
const LoginForm=()=>{
    const {theme}=useTheme();
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
            <TextField variant='outlined' type='email' label='Enter Email' onChange={(e)=>setEmail(e.target.value)} InputLabelProps={
                {
                    style:{
                        color:theme.typeBoxColor
                    }
                }
            }
             InputProps={
                {
                    style:{
                        color:theme.typeBoxColor
                    }
                }
            }/>
            <TextField variant='outlined' type='password' label='Enter Password' onChange={(e)=>setPass(e.target.value)} InputLabelProps={
                {
                    style:{
                        color:theme.typeBoxColor
                    }
                }
            }
             InputProps={
                {
                    style:{
                        color:theme.typeBoxColor
                    }
                }
            }/>
            <Button variant='contained' size='large' style={{backgroundColor:theme.title,background:theme.typeBoxColor}}>Login</Button>
        </Box>
    )
}

export default LoginForm;