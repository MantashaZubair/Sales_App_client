import React from 'react'

const Register = () => {
  const register=(e)=>{
    e.preventDefault();
    debugger;
}
  return (
    <div className="container login-container">
    <h4 className="card-title fs-2 text-center mt-md-3 mb-md-5 ">Register Form</h4>
 <div className='row '>
     <div className='col-12 px-md-0 px-1'>
     <div className="card cardPositon shadow">
         <div className="card-body">
          <form onSubmit={register} className='px-md-5  px-0'>
          <label htmlFor="firstname" className="form-label">FirstName</label>
             <input type="type"  className="p-md-2 p-1 mb-3 form-control input-bg" id="firstname" />
             <label htmlFor="lastname" className="form-label">LastName</label>
             <input type="email"  className="p-md-2 p-1 mb-3 form-control input-bg" id="lastname" />
              <label htmlFor="email" className="form-label">Email</label>
             <input type="email"  className="p-md-2 p-1 mb-3 form-control input-bg" id="email" />
             <label htmlFor="password" className="form-label">Password</label>
             <input type="password" className="p-md-2 p-1 mb-3 form-control input-bg" id='password'/>
             <div className="my-4 d-grid">
             <button className="custom-btn btn-primary" type='submit'>Register</button>
             </div>
          </form>
         </div>
     </div>
     </div>
 </div>
 </div>
  )
}

export default Register