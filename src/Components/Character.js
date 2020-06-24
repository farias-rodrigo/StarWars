import React from "react";

const Character = ({name, birth_year, hair_color, eye_color, mass}) => {
    return (
      <div className = "col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-white">Name: {name}</h5>
          <p className="card-text">Birth Year: {birth_year}</p>
          <p className="card-text">Hair Color: {hair_color}</p>
          <p className="card-text">Eye Color: {eye_color}</p>
          <p className="card-text">Mass: {mass}</p>
        </div>
      </div>
      </div>
    );
}
export default Character;