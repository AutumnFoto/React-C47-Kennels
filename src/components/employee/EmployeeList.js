import React, { useState, useEffect } from 'react'
import { EmployeeCard } from './EmployeeCard'
import { deleteEmployee, getAllEmployees } from '../../modules/EmployeeManager'

export const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return getAllEmployees()
    .then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

const handleDeleteEmployee = id => {
  deleteEmployee(id)
  .then(() => getAllEmployees().then(setEmployees));
};

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  return(
    <div className="container-cards">
    {employees.map(employee => 
    <EmployeeCard 
    key={employee.id} 
    employee={employee} 
    handleDeleteEmployee={handleDeleteEmployee} 
    />
    )}
 </div>
);
};
