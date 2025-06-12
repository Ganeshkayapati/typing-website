import { db } from "../fireBaseConfig";
import Graph from "./Graph";
import {auth} from '../fireBaseConfig'
import { toast } from "react-toastify";
import { useEffect } from "react";


const Stats=(
   { wpm,
    accuracy,
    correctChars,
    inCorrectChars,
    missedChars,
    extraChars,
    graphData }
)=>{
    let timeSet=new Set();
    const newGraphData = graphData.filter((data) => {
        if (!timeSet.has(data[0])) {
             timeSet.add(data[0]);
             return data;
        } 
    });

    const pushDataToDB=()=>{
        if(isNaN(accuracy)){
            toast.error("invalid test", {
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
        const resultRef=db.collection('Results');
        const {uid}=auth.currentUser;
        resultRef.add({
            wpm:wpm,
            accuracy:accuracy,
            timeStamp:new Date(),
            charcters:`${correctChars}/${inCorrectChars}/${missedChars}/${missedChars}/${extraChars}`,
            userId:uid
        }).then((res)=>{
             toast.success("Data Saved", {
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
            toast.error(errorMapping[err.code] || "error in saving data", {
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

    useEffect(()=>{
        if(auth.currentUser){
            pushDataToDB();
        }else{
            toast.warning("Login to save into DB", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: false,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "dark"
           });
        }
    })
    return (
        <div className="stats-box">
            <div className="left-stats">
                <div className="title">WPM</div>
                <div className="subtitle">{wpm}</div>
                <div className="title">Accuracy</div>
                <div className="subtitle">{accuracy}</div>
                <div className="title">Characters</div>
                <div className="subtitle">{correctChars}/{inCorrectChars}/{missedChars}/{missedChars}/{extraChars}</div>
            </div>
            <div className="right-stats">
                <Graph graphData={newGraphData}/>
            </div>
        </div>
    )
}
export default Stats;