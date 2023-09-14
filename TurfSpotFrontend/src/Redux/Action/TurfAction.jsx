import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';
const TurfAction = (userState, history) => {
    return async (dispatch) => {
        try {
            console.log(userState);
           // const turfdetails=localStorage.getItem("addturf");
           // console.log(turfdetails)
            const data = await axios.post("http://localhost:8080/turf/create", userState);
           
            console.log(data);
            localStorage.setItem("turf", JSON.stringify(data));
            console.log(localStorage.getItem("turf"));
           
            localStorage.setItem("turfId",data.turfId)
            console.log(data);
            console.log(localStorage.getItem("turfId"))
            dispatch({ type: REGISTER_SUCCESS, payload: data });
           
            history.push("/profile/manager");
           
        } catch (error) {
            console.log(error.response);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default TurfAction;

//const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });