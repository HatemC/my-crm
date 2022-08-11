import './App.css';
import customers from "./customers"
import { Component } from 'react';
import CustomerList from "./customerList";
import NavBar from './navBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      customers: customers
    };
  }
  render() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="cards">
          <CustomerList customers={this.state.customers} />
        </div>
      </div>
    </div>
     );
  };
}

export default App;
