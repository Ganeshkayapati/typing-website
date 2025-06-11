
import  { Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {auth} from "../fireBaseConfig";
import { toast } from 'react-toastify';
const SignUpForm=()=>{
    const {theme}=useTheme();
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [confirmPass,setConfirmPass]=useState("");

    const handleSubmit=()=>{
        if(!email || !pass || !confirmPass){
             toast.warning("Fill all details", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
             });
            return;
        }
        if(pass.length<6){
             toast.warning("Password should be atlest 6 charachters", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
             });
            return;
        }
        if(pass!==confirmPass){
            toast.warning("Password Mismatch", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
             });
             return;
            
        }

        auth.createUserWithEmailAndPassword(email,pass).then((res)=>{
            
             toast.success("User Created", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
             });
            
        }).catch((err)=>{
        
             toast.error("User Not created", {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: false,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
             });
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