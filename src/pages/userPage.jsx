import { useEffect, useState } from "react";
import { db, auth } from "../fireBaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import TableUserData from "../components/TableUserData";
import Graph from "../components/Graph";
import UserInfo from "../components/UserInfo";


const UserPage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [dataLoading,setDataLoading]=useState(true);
  const [graphData,setGraphData]=useState([]);
  const fetchData = () => {
    const ResultRef = db.collection("Results");
    const { uid } = auth.currentUser;
    let tempData = [];
    let tempGraphData=[];
    ResultRef.where("userId", "==", uid).orderBy('timeStamp','desc')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          //  console.log(doc.data());
          tempData.push({ ...doc.data() });
          tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0],doc.data().wpm])
        });
        setData(tempData);
        setGraphData(tempGraphData.reverse());
        setDataLoading(false);
      });
  }; 
  useEffect(() => {
    if (!loading) {
      fetchData(); 
    }
    if (!loading && !user) {
      navigate("/");
    }
  }, [loading]);
  if (loading || dataLoading) {
    return <div className="center-of-screen">
        <CircularProgress size={100}/>
    </div>;
  }
  return (
    <div className="canvas">
        <UserInfo totalTests={data.length}/>
        <div className="graph-userPage">
            <Graph graphData={graphData}/>
        </div>
        
        <TableUserData data={data}/>
    </div>
  )
};

export default UserPage;
