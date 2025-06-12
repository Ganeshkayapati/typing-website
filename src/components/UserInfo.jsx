import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../fireBaseConfig';
import { useNavigate } from 'react-router-dom';
const UserInfo = ({totalTests}) => {
    const navigate=useNavigate();

    const [user]=useAuthState(auth)
    return (
        <div className='user-profile'>
            
            <div className="user">
                <div className="picture">
                    <AccountCircleIcon style={{display:'block',transform:'scale(4)',margin:'auto',marginTop:'2.5rem'}} onClick={()=>{navigate("/")}}/>
                </div>
                <div className="info">
                    <div className="email">{user.email}</div>
                    <div className="joined">{user.metadata.creationTime}</div>
                </div>
            </div>
            <div className="tests">
                    <span>Tests Taken-{totalTests}</span>
            </div>
        </div>
    );
};

export default UserInfo;