import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookingAction from "../../Redux/Action/BookingAction";
import axios from "axios";

function BookingTurf(props) {
  const [userState, setuserState] = useState({
    userId: localStorage.getItem("userId"),
    paymentId: localStorage.getItem("id"),
    turfId: localStorage.getItem("turfId"),
    paymentAmount:localStorage.getItem("paymentAmount"),
  });
  const selector = useSelector((state) => state.userSignIn);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(localStorage.getItem("id"))

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userState);

    localStorage.setItem("bookTurf", JSON.stringify(userState));
    alert("booking added successfully");
    history.replace("/profile/user");
    
    dispatch(BookingAction(userState, history));
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 form-block px-4">
          <div className="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">

            <h1 class="display-6 text-center text-white mb-4">Booking Details</h1>
            
            <form onSubmit={onSubmitHandler}>
               
               <div className="form-input">             
                <label for="slot" className="text-white">Choose a slot -- </label>

                <select
                  className="bg-dark text-white"
                  style={{opacity:0.8}}
                  name="slot"
                  id="slot"                 
                  onChange={(e) => {
                    const slotId = e.target.value;
                    setuserState({ ...userState, ...{ slotId } });
                  }}
                >
                  <option value="1">6AM-7AM</option>
                  <option value="2">8AM-9AM</option>
                  <option value="3">9AM-10AM</option>
                  <option value="4">10AM-12PM</option>
                  <option value="5">12PM-2PM</option>
                  <option value="6">2PM-3PM</option>
                  <option value="7">3PM-4PM</option>
                  <option value="8">5PM-6PM</option>
                </select>
              </div> 

              <div className="form-input">
                <span>
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <input
                  type="date"
                  name="date"
                  placeholder="Turf booking date"
                  required
                  onChange={(e) => {
                    const date = e.target.value;
                    setuserState({ ...userState, ...{ date } });
                  }}
                />
              </div>
              
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-block mb-4 shadow-lg" /* onClick={onChangeHandler} */
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingTurf;
