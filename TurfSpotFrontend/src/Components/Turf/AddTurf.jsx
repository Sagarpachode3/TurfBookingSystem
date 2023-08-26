import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TurfAction from "../../Redux/Action/TurfAction";


function AddTurf(props) {
  
  const [userState, setuserState] = useState({
    managerId: localStorage.getItem("managerId"),
    turfAdd: "",
    turfName: "",
    turfAmount: 0,
    turfType: ""
  });

  console.log(userState);
  const dispatch = useDispatch();
  const history = useHistory();
  const managerState = localStorage.getItem("manager");
  console.log(managerState);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("addTurf", JSON.stringify(userState));
    console.log(localStorage.getItem("managerId"));
    var managerId = localStorage.getItem("managerId");
    setuserState({ ...userState, ...{ managerId } });
    console.log(userState);
    alert("turf added successfully");
    dispatch(TurfAction(userState, history));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 form-block px-4">
          <div className="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">

            <h1 class="display-6 text-center text-white mb-4">Add Turf</h1>

            <form onSubmit={onSubmitHandler}>

              <div className="form-input">
                <span>
                  <i className="fas fa-user-alt"></i>
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="Turf Name"
                  required
                  onChange={(e) => {
                    const turfName = e.target.value;
                    setuserState({ ...userState, ...{ turfName } });
                  }}
                />
              </div>

              <div className="form-input">
                <span>
                  <i className="fas fa-house-user"></i>
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="Turf Address"
                  required
                  onChange={(e) => {
                    const turfAdd = e.target.value;
                    setuserState({ ...userState, ...{ turfAdd } });
                  }}
                />
              </div>

              <div className="form-input">
                <span>
                  <i className="fas fa-laptop-code"></i>
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="turf description"
                  tabindex="10"
                  required
                  onChange={(e) => {
                    const turfType = e.target.value;
                    setuserState({ ...userState, ...{ turfType } });
                  }}
                />
              </div>
              <div className="form-input">
                <span>
                  <i className="fas fa-dollar-sign"></i>
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="Turf Price"
                  required
                  onChange={(e) => {
                    const turfAmount = e.target.value;
                    setuserState({ ...userState, ...{ turfAmount } });
                  }}
                />
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-block shadow-lg" /* onClick={onChangeHandler} */
                >
                  Add Turf
                </button>
              </div>
              <Link className="btn text-white text-decoration-underline" to="/profile/manager">
                Back To Home
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTurf;
