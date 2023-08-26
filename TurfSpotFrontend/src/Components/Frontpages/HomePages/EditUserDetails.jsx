
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUserDetails = () => {
  let history = useHistory();
  const { userId } = useParams();
  const [user, setUser] = useState({
    userId :"",
    firstName: "",
    lastName: "",
    contactNo: "",
    emailId: ""
   
   
  });

  const {firstName, lastName,contactNo,emailId} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await Axios.put(`http://localhost:8080/managers/users/${userId}`, user);
    history.push("/profile/userlist");
  };

  const loadUser = async () => {
    const result = await Axios.get(`http://localhost:8080/managers/users/${userId}`);
    console.log(result)
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User Profile</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="User Id"
              name="userId"
              value={userId}
              disabled={true}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="emailId"
              value={emailId}
              disabled={true}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your firstName"
              name="firstName"
              value={firstName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your lastname"
              name="lastName"
              value={lastName}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="contactNo"
              value={contactNo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserDetails;








