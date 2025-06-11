
import  { Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {auth} from "../fireBaseConfig"
const SignUpForm=()=>{
    const {theme}=useTheme();
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [confirmPass,setConfirmPass]=useState("");

    const handleSubmit=()=>{
        if(!email || !pass || !confirmPass){
            alert("Fill all the details");
            return;
        }
        if(pass.length<6){
            alert("Password should be atlest 6 charachters");
            return;
        }
        if(pass!==confirmPass){
            alert("Password Mismatch");
        }

        auth.createUserWithEmailAndPassword(email,pass).then((res)=>{
            alert("User Created")
        }).catch((err)=>{
        
            alert("User not created");
        })
    }
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
            <TextField variant='outlined' type='password' label='Conform Password' onChange={(e)=>setConfirmPass(e.target.value)} InputLabelProps={
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
            <Button variant='contained' size='large' style={{backgroundColor:theme.title,background:theme.typeBoxColor}} onClick={handleSubmit}>SignUp</Button>
        </Box>
    )
}

export default SignUpForm;