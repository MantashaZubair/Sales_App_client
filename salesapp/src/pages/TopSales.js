import React from 'react'

const TopSales = () => {
  return (
    <div className="container login-container">
    <h4 className="card-title fs-2  text-center mt-md-3 mb-5 ">Top Sales</h4>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Sales id:</th>
        <th scope="col">Product Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Sales Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td >Larry the Bird</td>
        <td >Larry the Bird</td>
        <td>@twitter</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export default TopSales