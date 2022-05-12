import axios from "axios";
// import { login } from "../../authContext/apiCalls";
// import { AuthContext } from "../../authContext/AuthContext";
import { useState,useContext } from "react";
import {Link,useHistory} from "react-router-dom";
import "./register.scss";
import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../lotties/50056-camera-moving';
export default function Register() {
  // const { dispatch } = useContext(AuthContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  

  // const handleStart = () => {
  //   setEmail(emailRef.current.value);
  // };
  const handleFinish = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("auth/register", { email,username, password });
      // await login({ email, password }, dispatch);
      await history.push({
        pathname: '/subscriptions',
        state: email});
      
      
    } catch (err) {console.log(err)
      alert("Invalid email/unavailable username");}
  };
  return (
    <div className="register">
      
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="/RevFlix-logo.jpeg"
            alt=""
          />
         
        </div><Lottie 
	    options={defaultOptions}
        height={800}
        width={1150}
      />
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {/* {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : ( */}
          <form className="input">
            <input type="email" placeholder="email"  onChange={(e) => setEmail(e.target.value)}/>
            <input type="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="registerButton" onClick={handleFinish}>
              Start
            </button> 
            
          </form> 
       <br /><p>Already signed in?</p><Link to="/login"><button className="loginButton">Sign In</button></Link>
      </div>
      
    </div>
   
  );
}
