import React from "react";
import { Component } from "react";
import Customer from  "./customer";

class CustomerList extends Component {
  render() {
    if (this.props.customers) {
    return (

      this.props.customers.map(customer => {
        return (
          <Customer name={customer.name} imageUrl={customer.imageUrl} description={customer.description} key={customer.id}
            contact={customer.contact} ></Customer>
      )})
    )};
  }
}
export default CustomerList;
