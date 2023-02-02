import React from 'react'
import "./Login.css"

const Login = () => {
  
  const login=(e)=>{
      e.preventDefault();
      debugger;
  }
  return (
    <div className="container login-container">
       <h4 className="card-title fs-2 text-center mt-md-3 mb-md-5 ">Login Form</h4>
    <div className='row '>
        <div className='col-12 px-md-0 px-1'>
        <div className="card cardPositon shadow">
            <div className="card-body">
             <form onSubmit={login} className='px-md-5  px-0'>
                 <label htmlFor="email" className="form-label">Email</label>
                <input type="email"  className="p-md-2 p-1 mb-3 form-control input-bg" />
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="p-md-2 p-1 mb-3 form-control input-bg" />
                <div className="my-4 d-grid">
                <button type='submit' className="custom-btn btn-primary">Login</button>
                </div>
             </form>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login