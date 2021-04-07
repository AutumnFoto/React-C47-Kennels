import React from "react";
import { Route } from "react-router-dom";
import {Home} from "./Home";
import { AnimalList } from "./animal/AnimalList";
import {CustomerList} from "./customer/CustomerList";
import { LocationList } from "./location/LocationList";
import { EmployeeList} from "./employee/EmployeeList";

// import {AnimalProvider} from "./animal/AnimalProvider"

export const ApplicationViews =  () => {
    return (
        <>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path ="/">
            <Home />
        </Route>

        <Route path= "/locations">
            <LocationList />
        </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
        <Route path = "/animals">
        <AnimalList />
        </Route>


        <Route path= "/customers">
            <CustomerList />
        </Route>

        <Route path= "/employees">
            <EmployeeList />
        </Route>



        </>
    )
}