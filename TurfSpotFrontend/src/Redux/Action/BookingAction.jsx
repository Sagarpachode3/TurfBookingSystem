import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';

const BookingAction = (userState, history) => {
    return async (dispatch) => {
        try {
            console.log(userState);
            const data = await axios.post("http://localhost:8080/booking/bookTurf", userState);
            console.log(data);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            history.push("/profile/user");
        } catch (error) {
            console.log(error.response);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default BookingAction;
