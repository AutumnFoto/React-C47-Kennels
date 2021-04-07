import React, {useState, useEffect} from "react";
import {CustomerCard} from "./CustomerCard";
import {deleteCustomer, getAllCustomers} from "../../modules/CustomerManager";

export const CustomerList = () => {
    // intial state is an empty array
    const [customers, setCustomers] = useState([]);
    
    const getCustomers = () => {
        // after the data comes back from API we use setCustomers function to update state
        return getAllCustomers()
        .then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

const handleDeleteCustomer = id => {
  deleteCustomer(id)
  .then(() => getAllCustomers().then(setCustomers));
};

    useEffect(() => {
        getCustomers();
    }, []);

    return(
        <div className="container-cards">
        {customers.map(customer =>
          <CustomerCard
           key={customer.id} 
           customer={customer} 
           handleDeleteCustomer={handleDeleteCustomer}
           />
        )}
      </div>
    );
  };