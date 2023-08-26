import React from "react";
import  FeedBackAction  from "../../Redux/Action/FeedBackAction";
import { useState , useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";

function Feedback() {
    const [feedBackState, setfeedbackState] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(feedBackState);
        localStorage.setItem("Feedback", JSON.stringify(feedBackState));
        dispatch(FeedBackAction(feedBackState, history));
        alert(" Feedback added successfully!! \n Thank You ");
        history.push("/");
    };

    const [users, setusers] = useState([]);
    const user = "user";
    const fetchData = async () => {
        const result = await Axios.get("http://localhost:8080/feedback");
        setusers(result.data);
    }

    useEffect(() => {
      fetchData();
    }, [])

    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 form-block px-4">
              <div className="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">

              <h1 class="display-6 text-center text-white mb-4 mt-4">Feedback Form</h1>
              
                <form onSubmit={onSubmitHandler}>

                  <div className="form-input">
                    <span>
                      <i className="fas fa-user-alt"></i>
                    </span>
                    <input
                      type="email"
                      name=""
                      placeholder="Enter your email"
                      required
                      onChange={(e) => {
                        const email = e.target.value;
                        setfeedbackState({ ...feedBackState, ...{ email } });
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
                      placeholder="Feedback"
                      required
                      onChange={(e) => {
                        const feedback = e.target.value;
                        setfeedbackState({ ...feedBackState, ...{ feedback } });
                      }}
                    />
                  </div>
                  
                  <div className="mb-3 d-flex align-items-center">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb1"
                      />
                      <label className="custom-control-label text-white" for="cb1">
                        I agree all terms & conditions
                      </label>
                    </div>
                  </div>
    
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-block shadow-lg mb-2" /* onClick={onChangeHandler} */
                    >
                      Submit Feedback
                    </button>
                  </div>
    
                </form>
              </div>
            </div>
          </div>

          <h1 class="display-6 text-center text-white mb-4">User Feedback</h1>
          <div className="row">
            <div className="mb-4">
            <table className="jumbotron table shadow-lg table-dark table-striped tb">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) => (
                    <tr key={user.email}>
                      <td>{user.email}</td>
                      <td>{user.feedback}</td>                                                                             
                    </tr>
                  ))
                }
              </tbody>
            </table>
            </div>
          </div>

        </div>
      );
  
}
export default Feedback;
