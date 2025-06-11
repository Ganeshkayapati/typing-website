import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {AppBar, Modal,Tabs,Tab} from '@mui/material';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import  {useTheme}  from '../context/ThemeContext';

function Account() {
    const {theme}=useTheme();
    const [open,setOpen]=useState(false);
    const [value,setValue]=useState(0);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleChange=(event,value)=>{
        setValue(value);
    }
    return (
        <div>
            <AccountCircleIcon onClick={handleOpen}/>
            <Modal open={open} onClose={handleClose} 
            style={
                {
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }
            }>
                <div style={{width:'400px', height:'100px'}}>
                    <AppBar position='static' style={{background:'transparent'}}>
                        <Tabs variant='fullWidth' value={value} onChange={handleChange}>
                            <Tab label="login" style={{color:theme.typeBoxColor}}></Tab>
                            <Tab label="signup" style={{color:theme.typeBoxColor}}></Tab>
                        </Tabs>
                    </AppBar>

                   {value==0 && <LoginForm/>}
                   {value==1 && <SignUpForm/>}
                </div>
            </Modal>
        </div>
    )
}

export default Account;