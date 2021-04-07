import React from 'react'
import "./Employee.css"

// employee is an object that has been passed through props, props is implied here. thats why we can do dot notation 
export const EmployeeCard =  ({employee, handleDeleteEmployee}) => {
    return(
        <div className= "card">
            <div className="card-content">
                <h3>Name: <span className="card-employeename">
                    {employee.name}</span></h3>
                    <p> Address: {employee.address}</p>
                    <button type="button" onClick= {() => handleDeleteEmployee(employee.id)}>Discharge</button>
            </div>
        </div>
    );
}