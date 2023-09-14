import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST} from "../Constants/Constants";
//import axios from '../../Components/Axios/BaseAxios'
import axios from 'axios';
import { Redirect } from "react-router";

export const AdminLoginAction=(loginState)=> async(dispatch)=>{
  //  dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post("http://localhost:8080/admin/adminlogin",loginState);
        dispatch({ type: LOGIN_SUCCESS, payload:data});
        //localStorage.setItem("user")
        localStorage.setItem("user", JSON.stringify(data));
      // if (new Date(data.expires_at) > new Date()) {
      //     axios.defaults.headers.common["Authorization"] = `Bearer ${data.jwttoken}`;}
      console.log("login action before push")
      
//      document.location.href("/");
    } catch(error){
    dispatch({type : LOGIN_FAIL, payload:error })
    }
}
