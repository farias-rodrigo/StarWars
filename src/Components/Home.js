import React, {Component} from "react";
import axios from 'axios'
import Character from './Character'

class Home extends Component{
    state={
        people:[]
    }

    getCharacters(){
        return axios.get("https://swapi.dev/api/people")
        .then(res => res.data.results)        
        .then(res => this.setState({people: res}))
        
        
    }
    
    componentDidMount(){
        this.getCharacters()
    

    }
    render(){
        const {people} = this.state;
        console.log(people)
        return(
            <div className="container">
                <div className="row">
                
                {people.map(
                    ({name, birth_year, hair_color, eye_color, mass }) => (
                        <Character
                        key={name}
                        name={name}
                        birth_year={birth_year}
                        hair_color={hair_color}
                        eye_color={eye_color}
                        mass={mass}
                        />
                    )
                )}
                </div>
            </div>

        )
    }
}

export default Home;