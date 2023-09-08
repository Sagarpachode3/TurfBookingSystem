import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_SUCCESS } from "../Constants/Constants";



export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_SUCCESS:
            return { user: action.payload, userSignIn: true };
        case LOGIN_FAIL:
            return { message: "login fail" };
        case LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
}