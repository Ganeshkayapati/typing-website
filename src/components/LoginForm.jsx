
import  {Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {auth} from "../fireBaseConfig"
import { toast } from "react-toastify";
import errorMapping from '../utils/errorMapping';
const LoginForm=({handleClose})=>{
    const {theme}=useTheme();
    const [email,setEmail]=useState("");
     const [pass,setPass]=useState("");
    const handleSubmit=()=>{
          if(!email || !pass){
           toast.warning("Fill all details", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: false,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "dark"
           });
            return;
        }
        auth.signInWithEmailAndPassword(email,pass).then((res)=>{
             toast.success("Succesfully LoggedIn", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: false,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "dark"
           });
           handleClose();
        }).catch((err)=>{
             toast.error(errorMapping[err.code] || "some error occured", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: false,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "dark"
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
            <Button variant='contained' size='large' style={{backgroundColor:theme.title,background:theme.typeBoxColor}} onClick={handleSubmit}>Login</Button>
        </Box>
    )
}

export default LoginForm;