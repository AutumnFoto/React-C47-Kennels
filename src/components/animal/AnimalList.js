import React, {useState, useEffect} from 'react';
import {AnimalCard} from "./AnimalCard";
import {deleteAnimal, getAllAnimals} from "../../modules/AnimalManager";

export const AnimalList = () => {
    // initial state is an empty array
    const [animals, setAnimals] = useState([]);

    const getAnimals= () => {
        // after the data comes back from the API, we use the setAnimals function to update state

    return getAllAnimals().then(animalsFromAPI => {
setAnimals(animalsFromAPI)
// console.log(animalsFromAPI);
    });
};

// Ultimately we useEffect anytime we need to reach out to the world or make changes that cannot be done in the return. NOTE: useEffect is a member of a family of tools that React broadly calls "hooks". Hooks are a way to gain access to some of React's underlying functionality.

//The function parameter is where you place the code that interacts with an external resource. The array parameter is used to control when the function parameter is executed.

// The function argument to useEffect tells React to call the getAnimals() function (that will fetch data from our API). The empty array argument tells React to call the function on the first render of the component.

const handleDeleteAnimal = id => {
  deleteAnimal(id)
  .then(() => getAllAnimals().then(setAnimals));
};
// got animals from API on components first render
useEffect(() => {
    getAnimals();
}, []);

// finally we use .map() to loop over the animals array to show a list of animals

// return (
//     <div className="container-cards">
//        {animals.map(animal => <AnimalCard />)}
//     </div>
// );
// };

// Once the data is returned from the AnimalManager, we invoke the setAnimals() function to save the animals in the component's state. After setAnimals() executes, the component re-renders and displays the animals.

return(
    <div className="container-cards">
      {animals.map(animal =>
        <AnimalCard 
        key={animal.id} 
        animal={animal} 
        handleDeleteAnimal={handleDeleteAnimal}
        />
      )}
    </div>
  );
};
