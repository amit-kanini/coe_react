import React from 'react';
import SignupImg from "../assets/images/signup.png";
import SigninForm from './signinForm';

function Signin() {
  return (
    <div className="container-fluid layout m-0 p-0">
      <div className="row layout p-0 m-0">
        <div className="col-6 dis-props signin-img p-0 m-0">
          <img src={SignupImg} style={{width: '80%'}}></img>
        </div>
        <div className="col-6 dis-props px-3 m-0">
         <SigninForm />
        </div>
      </div>
    </div>
  )
}

export default Signin;