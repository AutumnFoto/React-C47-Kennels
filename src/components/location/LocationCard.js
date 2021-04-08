import {Link} from "react-router-dom"
import React from "react"
import "./Location.css"

export const LocationCard = ({location, handleDeleteLocation}) => {
    return(
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-locationname">
                    {location.name}</span></h3>
                    <p> Address: {location.address}</p>
                    <button type= "button" onClick= {() => handleDeleteLocation(location.id)}> Discharge</button>
                    <Link to={`/locations/${location.id}`}>
                <button>Details</button>
            </Link>
            </div>
        </div>
    );
}