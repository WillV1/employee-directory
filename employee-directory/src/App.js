import React from 'react';
import Container from 'react-bootstrap/Container';


import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar';

import './App.css';

const employees = [
  {
      id: 1,
      name: "Mike",
      email: '123@gmail.com',
      phone: '919-123-4567'
  },
  {
      id: 2,
      name: "Joe",
      email: '123@gmail.com',
      phone: '919-123-4567'
  },
  {
      id: 3,
      name: "Sue",
      email: '123@gmail.com',
      phone: '919-123-4567'
  },
  {
      id: 4,
      name: "Billy",
      email: '123@gmail.com',
      phone: '919-123-4567'
  }
];


class App extends React.Component {

  state = {
    search: ''
  }

  renderSearchList = employee => {
    const {search} = this.search
    if(search !== '' && employee.name.indexOf(search) === -1){
      return null
    }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.renderSearchList(this.state.search);
  };


  render() {

    const {search} = this.state;
    const filteredEmployees = employees.filter(employee => {
      return employee.name.indexOf(employee) !== -1
    })
    return (
      <Container fluid={false}>
        <Header />
        <SearchBar value={this.state.search}
        handleInputChange={this.updateSearch}
        handleFormSubmit={this.handleFormSubmit}
         />
        <EmployeeTable employees={employees} updateEmployeeList={this.updateSearch}/>
      </Container>

    );
  };

};

export default App;
