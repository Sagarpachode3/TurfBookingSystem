import { LOGOUT_SUCCESS, LOGOUT_FAIL} from "../Constants/Constants";



export const logoutReducer=(state = {}, action) => {

    switch(action.type){
        case LOGOUT_SUCCESS:
            return {logoutState:false};
        case LOGOUT_FAIL:
            return {message:"login fail"};
        default :
            return state;
    }
}