import './App.css';
import customers from "./customers"
import { Component } from 'react';
import CustomerList from "./customerList";
import NavBar from './navBar';
import FilterBar from './filterBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      customers: customers
    };
  }

  filterCustomer = (event) => {
    console.log(event);
    let CustUp = [];
    const newCust = customers.find(customer => customer.name === event)
    CustUp = newCust ? [newCust] : customers;
    this.setState({
        customers: CustUp
      });
  }

  filterButt = (IdOpt,IdButt) => {
    console.log(IdOpt);
    console.log(IdButt);
    console.log(customers[1][IdOpt]);
    let CustFil =[];
    const filtredCust =this.state.customers.filter(customer => customer[IdOpt] === IdButt);
    console.log(filtredCust);
    CustFil = filtredCust.length > 0 ? filtredCust : this.state.customers;
    this.setState({
      customers: CustFil
    });
  }

  render() {
  return (
    <div>
      <NavBar searchCust={this.filterCustomer} />
      <div className="containext" >
        <FilterBar filterFunction={this.filterButt} />
        <div className="container" >
          <div className="cards">
            <CustomerList customers={this.state.customers} />
          </div>
        </div>
      </div>
    </div>
     );
  };
}

export default App;
