import React from "react";
import { useTestMode } from "../context/TestModeContext";
import { useTheme } from "../context/ThemeContext";

const UpperMenu = ({countDown}) => {
    
    const {theme}=useTheme();
    const {setTestTime} = useTestMode()
    const updateTime = (event) => {
            setTestTime(Number(event.target.id));
    }
    return(
       <div className="upper-menu">
         <div className="counter" style={{color:theme.title}}>
            {countDown}
        </div>
        <div className="modes">
             <div className="time-mode" id={15} onClick={updateTime} >15s</div>
             <div className="time-mode" id={30} onClick={updateTime} >30s</div>
             <div className="time-mode" id={60} onClick={updateTime} >60s</div>
        </div>

       </div>
    )

}

export default UpperMenu;