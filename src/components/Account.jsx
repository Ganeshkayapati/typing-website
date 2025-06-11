import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Modal} from '@mui/material';
import { useState } from 'react';

function Account() {
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
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
                <div style={{width:'400px', height:'100px'}}>Modal</div>
            </Modal>
        </div>
    )
}

export default Account;