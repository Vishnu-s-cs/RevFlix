import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
   alert("Invalid UserName or Password OR you are not subscribed yet");
    // window.location.reload(false);
    dispatch(loginFailure());
    
    
  }
};
