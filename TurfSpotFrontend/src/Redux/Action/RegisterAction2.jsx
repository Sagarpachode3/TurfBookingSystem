import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';
const RegisterAction2 = (managerState, history) => {
    return async (dispatch) => {
        try {
            console.log(managerState);
            const data = await axios.post("http://localhost:8080/managers/register", managerState);
            console.log(data);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            history.push("/loginmanager");
        } catch (error) {
            console.log(error.response);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default RegisterAction2;