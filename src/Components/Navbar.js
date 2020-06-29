import React from "react";
import {withRouter, Link} from "react-router-dom";

const Navbar = () => {

    return(

      <div className="col-12">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Characters</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Planets</Link>
        </li>
      </ul>
      </div>
    );
}

export default withRouter(Navbar);
