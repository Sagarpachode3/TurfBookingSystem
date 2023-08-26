import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditTurf = () => {
  let history = useHistory();
  const { turfId } = useParams();
  //alert(turfId)
  const [user, setUser] = useState({
    turfId :"",
    turfName: "",
    turfAdd: "",
    turfType: "",
    managerId: ""
  });

  const { turfName,turfAdd,turfType,managerId} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await Axios.put(`http://localhost:8080/turf/update/${turfId}`, user);
    alert("Turf updated successfully");
    history.push("/viewturf");
  };

  const loadUser = async () => {
    const result = await Axios.get(`http://localhost:8080/turf/fetchByTurfId/${turfId}`);
    console.log(result)
    setUser(result.data);
  };
  return (
    <div className="container bg-transparent">
      <div className="w-75 mx-auto shadow p-5">
      <h1 class="display-6 text-center text-white mb-4">Edit Turf Details</h1>

        <form onSubmit={e => onSubmit(e)}>

        <div className="form-group">
        <label className="text-black"> TurfId </label>       
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="User Id"
              name="turfId"
              value={turfId}
              disabled={true}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
          <label className="text-black"> Turf Name </label>     
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter turf name"
              name="turfName"
              value={turfName}
              disabled={true}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
          <label className="text-black"> Turf City </label>     
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter turf address"
              name="turfAdd"
              value={turfAdd}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
          <label className="text-black">Turf Description </label>   
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your turf description"
              name="turfType"
              value={turfType}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <div className="form-group">
         <label className="text-black"> Manager Id </label> 
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter turf manager id"
              name="managerId"
              value={managerId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-dark btn-block mt-4">Update Turf</button>
        </form>
      </div>
    </div>
  );
};

export default EditTurf;