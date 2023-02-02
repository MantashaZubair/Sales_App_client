import React from 'react'

const AddSalesEntry = () => {
  const addsales =(e)=>{
    e.preventDefault();
    debugger
  }
  return (
    <div className="container login-container">
    <h4 className="card-title fs-2 text-center mt-md-3 mb-md-5 ">Add Sale Entry</h4>
 <div className='row '>
     <div className='col-12 px-md-0 px-1'>
     <div className="card cardPositon shadow">
         <div className="card-body">
          <form onSubmit={addsales} className='px-md-5  px-0'>
          <label htmlFor="productname" className="form-label">Product Name</label>
             <input type="type"  className="p-md-2 p-1 mb-3 form-control input-bg" id="productname" />
             <label htmlFor="quantity" className="form-label">Quantity</label>
             <input type="email"  className="p-md-2 p-1 mb-3 form-control input-bg" id="quantity" />
              <label htmlFor="amount" className="form-label">Amount</label>
             <input type="email"  className="p-md-2 p-1 mb-3 form-control input-bg" id="amount" />
             <div className="my-4 d-grid">
             <button className="custom-btn btn-primary" type='submit'>submit</button>
             </div>
          </form>
         </div>
     </div>
     </div>
 </div>
 </div>
  )
}

export default AddSalesEntry