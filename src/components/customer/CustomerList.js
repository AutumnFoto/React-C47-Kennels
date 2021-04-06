import React, {useState, useEffect} from "react";
import {CustomerCard} from "./CustomerCard";
import {getAllCustomers} from "../../modules/CustomerManager";

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

    useEffect(() => {
        getCustomers();
    }, []);

    return(
        <div className="container-cards">
        {customers.map(customer => <CustomerCard />)}
     </div>
    )
}
