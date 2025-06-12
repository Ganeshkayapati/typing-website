import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box,AppBar, Modal,Tabs,Tab} from '@mui/material';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import  {useTheme}  from '../context/ThemeContext';
import GoogleButton from 'react-google-button'
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {auth} from '../fireBaseConfig'
import { toast } from 'react-toastify';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
function Account() {
    const {theme}=useTheme();
    const [open,setOpen]=useState(false);
    const [value,setValue]=useState(0);
    const navigate=useNavigate();

    const [user]=useAuthState(auth)
    const handleOpen=()=>{
        if(user){
            //usePage
            navigate('/user');
        }else {
            setOpen(true);
        }
        
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleChange=(event,value)=>{
        setValue(value);
    }
    const handleLogout=()=>{
        auth.signOut().then((res)=>{
             toast.success("Succesfullt Logged Out", {
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
            toast.error("Error in logging out", {
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
    const googleProvider=new GoogleAuthProvider();
    const handleGoogleSubmit=()=>{
        signInWithPopup(auth,googleProvider).then((res)=>{
            toast.success("Google Login Succes", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            handleClose();

        }).catch((err)=>{
            toast.error(errorMapping[err.code] || "not able to ue google auth", {
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
    
    return (
        <div>
            <AccountCircleIcon onClick={handleOpen}/>
            {user&&<LogoutIcon onClick={handleLogout}/>}
            <Modal open={open} onClose={handleClose} 
            style={
                {
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }
            }>
                <div style={{width:'400px', height:'100px', textAlign:'center'}}>
                    <AppBar position='static' style={{background:'transparent'}}>
                        <Tabs variant='fullWidth' value={value} onChange={handleChange}>
                            <Tab label="login" style={{color:theme.typeBoxColor}}></Tab>
                            <Tab label="signup" style={{color:theme.typeBoxColor}}></Tab>
                        </Tabs>
                    </AppBar>

                   {value==0 && <LoginForm handleClose={handleClose}/>}
                   {value==1 && <SignUpForm handleClose={handleClose}/>}

                   <Box>
                    <span style={{color:theme.typeBoxColor}}>Or</span>
                    <GoogleButton style={{width:'100%', marginTop:'8px'}} onClick={handleGoogleSubmit}/>
                   </Box>
                </div>
            </Modal>
        </div>
    )
}

export default Account;