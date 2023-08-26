import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProfileMangerAdmin = () => {
  let history = useHistory();
  const { managerId } = useParams();
  const [user, setUser] = useState({
    managerId :"",
    firstName: "",
    lastName: "",
    contactNo: "",
    emailId: ""
   
   
  });

  const { firstName,lastName,contactNo,emailId} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await Axios.put(`http://localhost:8080/admin/update/${managerId}`, user);
    alert("Manager updated successfully");
    history.push("/admin/managerlist");
  };

  const loadUser = async () => {
    const result = await Axios.get(`http://localhost:8080/admin/manager/${managerId}`);
    console.log(result)
    setUser(result.data);
  };
  return (
    <div className="container bg-transparent">
      <div className="w-75 mx-auto shadow p-5">
      <h1 class="display-6 text-center text-white mb-4">Edit Manager Details</h1>
        <form onSubmit={e => onSubmit(e)}>

        <div className="form-group">
        <label className="text-black"> Manager Id </label>       
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="User Id"
              name="managerId"
              value={managerId}
              disabled={true}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
          <label className="text-black"> First Name </label>     
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter first name"
              name="firstName"
              value={firstName}
              disabled={true}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
          <label className="text-black"> Last Name </label>     
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Last Name"
              name="lastName"
              value={lastName}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
          <label className="text-black">Contact No. </label>   
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your contact No."
              name="contactNo"
              value={contactNo}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <div className="form-group">
         <label className="text-black"> Email Id </label> 
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter turf manager id"
              name="emailId"
              value={emailId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-dark btn-block mt-4">Update Manager</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileMangerAdmin;