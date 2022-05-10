// import { useHistory } from "react-router-dom";

const AuthReducer = (state, action) => {
  // const history = useHistory();

  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        
        user: null,
        isFetching: false,
        error: false,
        // redirect(){ history.push("/register");},
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
