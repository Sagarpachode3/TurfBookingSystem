import {REGISTER_SUCCESS,REGISTER_FAIL} from '../Constants/Constants'
import axios from 'axios';
const PaymentAction = (userState, history) => {
    return async (dispatch) => {
        try {
            console.log(userState);
          //  const paymentdetails=localStorage.getItem("payment");
           // console.log(paymentdetails)
            const data = await axios.post("http://localhost:8080/payment", userState);
            console.log(data);
           // localStorage.setItem("payment", JSON.stringify(data));
            //console.log(localStorage.getItem("payment"));
            localStorage.setItem("id",data.data.id)
          //  console.log(data);
            console.log(localStorage.getItem("id"))
           

            dispatch({ type: REGISTER_SUCCESS, payload: data });
            history.push("/booking");
        } catch (error) {
            console.log(error.response);
            dispatch({ type: REGISTER_FAIL, payload: error.message })
        }
    }
}

export default PaymentAction;

