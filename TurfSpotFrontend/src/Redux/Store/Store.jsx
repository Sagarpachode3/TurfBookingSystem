import { applyMiddleware, combineReducers, compose, createStore } from "redux";
//import { authreducer, userSigninReducer } from "../Reducers/LoginReducer";
import thunk from "redux-thunk";
import { loginReducer } from "../Reducer/LoginReducer";
import { logoutReducer } from "../Reducer/LogoutReducer";
import registerReducer from '../Reducer/RegisterReducer';

const initState = {
  loginState:{
    user:localStorage.getItem("user") ? localStorage.getItem("user") : null
  }     
}

const reducer = combineReducers({
  //userSignIn: initState,
  registerId:registerReducer,
  loginState:loginReducer,
  logoutState:logoutReducer
//  userSignIn:initState,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;