import React from "react";
import { Component } from "react";

class NavBar extends Component {

  handleChange = () => {
    const input = document.getElementById("in").value;
    this.props.searchCust(input);
  }

  render() {
  return (
    <div className="navbarcrm">
      <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
      <div className="input-group mb-3">
        <input type="text" className="form-control"
        placeholder="chercher un client" aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          id="in" />
          <div className="input-group-append">
          <button className="input-group-text" id="basic-addon2" onClick={this.handleChange} >cherche</button>
          </div>
      </div>
      <div>
        <img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="avatar" alt="" />
      </div>
    </div>
  )
  }
}

export default NavBar;
