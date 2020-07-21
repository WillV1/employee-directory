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
      console.log(response);
      let newArray = [];
      for (let i = 0; i < response.data.results.length; i++) {
        newArray.push(response.data.results[i])
      }
      console.log(newArray);
      this.setState({ filteredEmployees: newArray });
    });

  };

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  renderSearchList = () => {
    const { search } = this.state
    let employees = this.state.filteredEmployees.filter((employee) => {
      return employee.name.indexOf(search) >= 0;
    })


    // this.setState({ filteredEmployees })


  }

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
