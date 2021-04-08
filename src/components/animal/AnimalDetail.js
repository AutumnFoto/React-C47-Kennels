import React, {useState, useEffect } from 'react';
import {deleteAnimal, getAnimalById} from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import {useParams, useHistory} from "react-router-dom";

export const AnimalDetail = () => {
    const [animal, setAnimal] = useState({ name: "", breed: ""});
    const [isLoading, setIsLoading] = useState(true);

    const {animalId} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        // invoke the delete function in AnimalManager and redirect the animal list
        setIsLoading(true);
        deleteAnimal(animalId).then(() => 
        history.push("/animals")
        );
    };

    useEffect(() => {
        // getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        console.log("useEffect", animalId)
        getAnimalById(animalId)
        .then(animal=>{
            setAnimal({
                name: animal.name, 
                breed: animal.breed
            });
            setIsLoading(false);
        });
    }, [animalId]);

// whats happening here??
return (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">Location: {animal.location?.name}</div>
        <div className= "animal__owner">Customer: {animal.customer?.name}</div>
        {/* Immediate properties of an empty object will not break if you try to reference that property but it doesn't actually exist, however nested properties of an empty object will. Use the Optional chaining (?.) operator to prevent nested values from breaking the code.  */}
        <button type= "button" disabled={isLoading} onClick={handleDelete}>Discharge</button>
    </section>
);
}