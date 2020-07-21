import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from "axios";
// import API from './components/API';

import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar';

import './App.css';


class App extends React.Component {

  state = {
    search: '',
    filteredEmployees: []
  }


  // componentDidMount() {
  
  // }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
    .then( (response) => {
      let employees = response.data.results;
      this.setState({ filteredEmployees: response.data.results });
    });

  };

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  // renderSearchList = () => {
  //   const { search } = this.state
  //   let filteredEmployees = employees.filter((employee) => {
  //     return employee.name.indexOf(search) >= 0;
  //   })


  //   this.setState({ filteredEmployees })


  // }

  handleFormSubmit = event => {
    event.preventDefault();
    this.renderSearchList();
  }


  render() {

    return (
      <Container fluid={false}>
        <Header />
        <SearchBar value={this.state.search}
          handleInputChange={this.updateSearch}
          handleFormSubmit={this.handleFormSubmit}
        />
        <EmployeeTable employees={this.state.filteredEmployees}
          updateEmployeeList={this.updateSearch}
        />
      </Container>

    );
  };

};

export default App;
