import React from "react"
import "./Customer.css"

export const CustomerCard= ({customer, handleDeleteCustomer}) =>{ 
//     <section className = "customer">
//         <h3 className = "customer_name"> Hannah Hall</h3>
//         <div className= "customer_address"> Address: 100 Infinity Way</div>
//     </section>
// )
return(
<div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.jpg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-customername">
            {customer.name}
          </span></h3>
          <p>Address: {customer.address}</p>
          <button type= "button" onClick={() => handleDeleteCustomer(customer.id)}>Discharge</button>
        </div>
      </div>
    );
}
  