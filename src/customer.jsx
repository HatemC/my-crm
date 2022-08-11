import React, { Component } from "react";

class Customer extends Component {

  render() {
    return (
    <div className="card-trip">
        <img src={this.props.imageUrl} alt="" />
        <div className="card-trip-infos">
          <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
          </div>
            <h2 className="card-trip-pricing">{this.props.contact}</h2>
            <img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="card-trip-user avatar-bordered" alt="" />
        </div>
    </div>
    )
  };

}
export default Customer;
