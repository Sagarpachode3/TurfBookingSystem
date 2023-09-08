import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';
const RegisterAction = (userState, history) => {
    return async (dispatch) => {
        try {
            console.log(userState);
            const data = await axios.post("http://localhost:8080/users/register", userState);
            console.log(data);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
          
            history.push("/loginuser");
        } catch (error) {
            console.log(error.response);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default RegisterAction;