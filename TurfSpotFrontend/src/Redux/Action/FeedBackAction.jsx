import {FEEDBACK_SUCCESS} from '../Constants/Constants'
import axios from 'axios';
 
const FeedBackAction = (feedBackState) => {
    return async (dispatch) => {
        try{
            console.log(feedBackState);
            const data = await axios.post("http://localhost:8080/feedback/create", feedBackState);
            console.log(data);
            dispatch({ type: FEEDBACK_SUCCESS, payload: data });
        }catch(error){
            console.log(error.response);
        }
            
    }
}

export default FeedBackAction;
