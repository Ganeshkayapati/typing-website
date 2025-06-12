import { useEffect, useState } from "react";
import { db, auth } from "../fireBaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const UserPage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const fetchData = () => {
    const ResultRef = db.collection("Results");
    const { uid } = auth.currentUser;
    let tempData = [];
    ResultRef.where("userId", "==", uid)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          tempData.push({ ...doc.data() });
        });
        setData(tempData);
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
  if (loading) {
    return <CircularProgress />;
  }
  return <div></div>;
};

export default UserPage;
