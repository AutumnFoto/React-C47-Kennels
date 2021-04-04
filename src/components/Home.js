// import {AnimalCard} from "./animal/AnimalCard";
import { PropsAndState } from "./PropsAndState";

export const Home = () => {
    // write more js to do some other fun things can do it here

    console.log("home component yay")
    return (
        <>
        <h2 className=""> Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div> Visit Us at the Nashville North Location</div>
            <div> 500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Autumn"} />
        </>
    )
}