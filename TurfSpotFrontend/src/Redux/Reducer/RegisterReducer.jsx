import { REGISTER_SUCCESS,REGISTER_FAIL } from "../Constants/Constants";

export const registerReducer = (state = {}, action) => {

    switch (action.type) {
        case REGISTER_SUCCESS:
            return {userid: action.payload};

        case REGISTER_FAIL:
            return state;

        default :
            return state;
    }
} 

export default registerReducer;