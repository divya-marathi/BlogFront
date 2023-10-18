import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios'

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
   const  [user,setUser]=useState({
  email:"",
  password:""
})
 

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = async(event) => {
    //Prevent page reload
    event.preventDefault();
    let response=await axios.post('http://localhost:7000/login',{email:user.email,password:user.password})
    if(response.status==202){
      alert('login success')
    }
    // let { uname, pass } = document.forms[0];

    // // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //     <Link to="/"></Link>;
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input className="inputSec" value={user.email} onChange={(e)=>{
            setUser({
              ...user,
              email:e.target.value
            })
          }} type="email" name="email" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input className="inputSec"  value={user.password} onChange={(e)=>{
            setUser({
              ...user,
              password:e.target.value
            })
          }}  type="password" name="password" required/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div className="app">
        <div className="login-form">
          <div className="title">Log In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          <p>
            Don't have a Account?
            <Link to="/signin">
              <span className="text-info">Create Account</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
