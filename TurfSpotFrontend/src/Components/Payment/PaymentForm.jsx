import React, { useEffect } from "react";
import { useState } from "react";

import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PaymentAction from "../../Redux/Action/PaymentAction";
import axios from "axios";

function PaymentForm(props) {
  const [userState, setuserState] = useState({
    userId: localStorage.getItem("userId"),
    turfId: localStorage.getItem("turfId"),
    paymentAmount:localStorage.getItem("turfAmount")
  });
  console.log(localStorage.getItem("turfAmount"))
  console.log(localStorage.getItem("turfId"))
  const dispatch = useDispatch();
  const history = useHistory();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    dispatch(PaymentAction(userState, history));
    history.push("/booking");
    alert("payment confirm");
  };
 
  const NumericOnly= (e) => { 
    const reg = /^[0-9\b]+$/
    let preval=e.target.value
    if (e.target.value === '' || reg.test(e.target.value)) return true
    else e.target.value = preval.substring(0,(preval.length-1))
}

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 form-block px-4">
          <div className="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">

            <h1 class="display-6 text-center text-white mb-4">Payment Details</h1>
            <form onSubmit={onSubmitHandler}>

              <div className="form-input">
                <span>
                  <i className="fa fa-credit-card"></i>
                </span>
                <input
                  type="text"
                  name=""
                  placeholder="Card Number"
                  required
                  maxLength="16"
                  onChange={NumericOnly}                 
                  onBlur={(e) => {
                    const cardnumber = e.target.value;
                    if (!(cardnumber.length == 16)) {
                      alert("Card number must be of 16 digits!");
                    }
                  }}
                />
              </div>

              <div className="form-input">
                <span>
                  <i className="fas fa-user-alt"></i>
                </span>
                <input
                  type="text"
                  name=""                 
                  placeholder="Card Holder Name"
                  required
                  onChange={(e) => {
                   // const paymentAmount = e.target.value;
                    //setuserState({ ...userState, ...{ paymentAmount } });
                  }}
                />
              </div>

              <div className="form-input">
                <span>
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <input
                  type="number"
                  name=""
                  min="1"
                  max="12"
                  step="1"                                 
                  placeholder="Expiry month"                  
                  required
                  onChange={(e) => {
                    const paymentAmount = e.target.value;
                  }}
                />
              </div>

              <div className="form-input">
                <span>
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <input
                  type="number"
                  min="2022"
                  max="2040"
                  step="1"
                  name=""                                  
                  placeholder="Expiry year"
                  required
                  onChange={(e) => {
                  }}
                />
              </div>

              <div className="form-input">
                <span>
                  <i className="fas fa-user-alt"></i>
                </span>
                <input
                  type="text"
                  name=""
                  maxLength="3"
                  placeholder="CVV"
                  required
                  onBlur={(e) => {
                    const cvv = e.target.value;
                    if ((cvv.length != 3)) {
                      alert("CVV must be of 3 digits!");
                    }}}
                />
              </div>

              <div className="mb-3 d-flex align-items-center">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    required
                    id="cb1"
                  />
                  <label className="custom-control-label text-white" for="cb1">
                    I agree all terms & conditions
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-block shadow-lg">
                  Payment Confirm
                </button>
              </div>
              <Link className="btn btn-dark mb-4" style={{opacity:0.8}} to="/viewturflist">
                Back
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentForm;