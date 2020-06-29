import React, {useState, useEffect} from "react";
// import axios from 'axios'
import Character from './Character'
import { withRouter } from "react-router-dom";


const Characters = () =>{

    const [state, setState] = useState({
        people:[]
    })

    const {people} = state

    useEffect(() => {
        async function fetchPeople(){
            let res = await fetch("https://swapi.dev/api/people/?format=json");
            let data = await res.json();
            //console.log(data);
            setState({
                ...state, 
                people: data.results
            })            
        }
        fetchPeople();
    });      
    

    return (
      <div className="container">
        <div className="row">
          {people.map(({ name, birth_year, hair_color, eye_color, mass }) => (
            <Character
              key={name}
              name={name}
              birth_year={birth_year}
              hair_color={hair_color}
              eye_color={eye_color}
              mass={mass}
            />
          ))}
        </div>
      </div>
    );
};
export default withRouter(Characters);