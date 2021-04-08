import React from "react";
import { Route } from "react-router-dom";
import {Home} from "./Home";
import { AnimalList } from "./animal/AnimalList";
import {CustomerList} from "./customer/CustomerList";
import { LocationList } from "./location/LocationList";
import { EmployeeList} from "./employee/EmployeeList";
import {AnimalDetail} from "./animal/AnimalDetail";
import {LocationDetail} from "./location/LocationDetail";

// import {AnimalProvider} from "./animal/AnimalProvider"

export const ApplicationViews =  () => {
    return (
        <>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path ="/">
            <Home />
        </Route>

        {/*Render
                Start of Location Routes */}
            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>
            {/* End of Location Routes */}
     {/* Make sure you add the `exact` attribute here */}
<Route exact path="/animals">
  <AnimalList />
</Route>

<Route path="/animals/:animalId(\d+)">
  <AnimalDetail />
</Route>

{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}

        <Route path= "/customers">
            <CustomerList />
        </Route>

        <Route path= "/employees">
            <EmployeeList />
        </Route>



        </>
    )
}