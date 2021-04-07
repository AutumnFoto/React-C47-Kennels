import React, {useState, useEffect } from 'react';
import {getAnimalbyId} from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import {useParams, useHistory} from "react-router-dom";

export const AnimalDetail = () => {
    const [animal, setAnimal] = useState({ name: "", breed: ""});

    const {animalId} = useParams();
    const history = useHistory();

    useEffect(() => {
        // get//getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    })
}