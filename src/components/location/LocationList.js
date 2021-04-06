import React, { useState, useEffect } from 'react'
import { LocationCard } from './LocationCard'
import { getAllLocations, getLocationById } from '../../modules/LocationManager'

export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return getAllLocations()
    .then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  return(
    <div className="container-cards">
    {locations.map(location => <LocationCard />)}
 </div>
)
}