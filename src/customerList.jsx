import React from "react";
import { Component } from "react";
import Customer from  "./customer";

class CustomerList extends Component {
  render() {
    return (
      this.props.customers.map(customer => {
        return (
          <Customer name={customer.name} imageUrl={customer.imageUrl} description={customer.description} key={customer.id}
            contact={customer.contact} ></Customer>
      )})
    )};
}
export default CustomerList;
