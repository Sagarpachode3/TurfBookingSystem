import { LOGOUT_FAIL, LOGOUT_SUCCESS } from "../Constants/Constants"
import axios from 'axios';

export const LogoutAction = () => async (dispatch) => {
    try {
        console.log("In here");
        dispatch({ type: LOGOUT_SUCCESS });
        localStorage.removeItem("user");
    } catch (error) {
        console.log(error);
        dispatch({ type: LOGOUT_FAIL, payload: error.message })
    }

}


