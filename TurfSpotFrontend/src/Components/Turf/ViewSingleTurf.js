import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewSingleTurf = () => {

    const [user, setUser] = useState({
      turfId :localStorage.getItem("turfId"),
      turfName: "",
      turfAdd: "",
      turfType: "",
      turfAmount:0.0
      //managerId: ""
  });
  const { turfId } = useParams();
  localStorage.setItem("turfidd",{turfId});
 // alert(turfId)
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/turf/fetchByTurfId/${turfId}`);
    console.log(res);
    localStorage.setItem("turf", JSON.stringify(res));
    console.log(localStorage.getItem("turf"));
   
    localStorage.setItem("turfId",res.data.turfId)
    console.log(localStorage.getItem("turfId"))
    localStorage.setItem("turfAmount",res.data.turfAmount)
    console.log(localStorage.getItem("turfAmount"))
    setUser(res.data);
  };
  return (
    <div className="container py-4 bg-transparent">
       <h1 class="display-6 text-center text-white mb-4">Turf Details</h1>   

      <ul className="list-group w-100">
        Name:<li className="list-group-item">{user.turfName}</li>
        Address:<li className="list-group-item"> {user.turfAdd}</li>
        Description:<li className="list-group-item">{user.turfType}</li>
        Amount:<li className="list-group-item">{user.turfAmount}</li>
      </ul>
      <Link className="btn btn-dark mt-4" style={{opacity:0.80}} to="/viewturflist">
        Back  
      </Link> &nbsp; &nbsp; &nbsp;
      <Link className="btn btn-dark mt-4" style={{opacity:0.80}} to="/paymentform">
        Pay Now
      </Link>
    </div>
  );
};

export default ViewSingleTurf;
