import React from 'react';
import Coe from "../assets/images/Coe-blkText.png";
import { useHistory } from 'react-router-dom';

function SignupForm() {

    const history = useHistory();

  return (
     <div style={{width: '55%'}}>
            <div>
              <img className="d-flex flex-wrap justify-content-start align-items-center mb-1" src={Coe} width='75' height='50'></img>
              <p className="d-flex flex-wrap justify-content-start align-items-center mb-1" style={{fontSize: '16px', fontWeight: '600'}}>Sign up</p>
              <p className="d-flex flex-wrap justify-content-start align-items-center mb-3" style={{fontSize: '13px', fontWeight: '400'}}>Please enter your details!</p>
            </div>
            <form className="needs-validation" style={{width: '100%'}}>
              <div className="d-flex flex-wrap justify-content-start align-items-center mb-3">
                <label htmlfor="validationCustom01" className="form-label mb-0">Name</label>
                <input type="text" className="form-control" id="validationCustom01" style={{padding: '.25rem .75rem'}} required />
              </div>
              <div className="d-flex flex-wrap justify-content-start align-items-center mb-3">
                <label htmlfor="validationCustom02" className="form-label mb-0">Email ID</label>
                <input type="text" className="form-control" id="validationCustom02"  required />
              </div>
              <div className="d-flex flex-wrap justify-content-start align-items-center mb-3">
                <label htmlfor="validationCustom03" className="form-label mb-0">Password</label>
                <input type="password" className="form-control" id="validationCustom03" style={{padding: '.25rem .75rem'}} required />
              </div>
              <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
                <label htmlfor="validationCustom04" className="form-label mb-0">Re-Password</label>
                <input type="password" className="form-control" id="validationCustom04"  required />
              </div>
              <div className="d-flex flex-wrap justify-content-start align-items-center mt-4">
                <button className="signin-btn p-2" onClick={() => history.push('/Dashboard')}>SIGN UP</button>
              </div>
           </form>
           <div className="mt-3">
            <p style={{fontSize: '12px', fontWeight: '400'}}>Already have an account? <span className="ms-1" style={{color: '#1076BD', fontWeight: '600', cursor: 'pointer', borderBottom: '1px solid #1076BD'}} onClick={() => history.push('/')}>Sign in</span></p>
          </div>
    </div> 
  )
}

export default SignupForm;