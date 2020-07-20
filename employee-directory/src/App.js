import React from 'react';
import Container from 'react-bootstrap/Container';
import API from './components/API';

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

  handleSearch = () => {


  }

  employeeGroup = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  // renderSearchList = employee => {
  //   const { search } = this.state
  //   if (search !== '' && employee.name.indexOf(search) === -1) {
  //     return null
  //   }
  // }


  // updateSearch = (event) => {
  //   this.setState({ search: event.target.value });
  // }



  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.renderSearchList();
  // };

  renderSearchList = () => {
    const { search } = this.state
    let filteredEmployees = employees.filter((employee) => { 
      return employee.name.indexOf(search) >= 0;
    })

  }

    updateSearch = event => {
    this.setState({filteredEmployees})
    }

  

  handleFormSubmit = event => {
    event.preventDefault();
    this.renderSearchList();
}


  render() {

    // const { search } = this.state;
    // const filteredEmployees = employees.filter(employee => {
    //   return employee.name.indexOf(employee) !== -1
    // })
    return (
      <Container fluid={false}>
        <Header />
        <SearchBar value={this.state.search}
          handleInputChange={this.updateSearch}
          handleFormSubmit={this.handleFormSubmit}
        />
        {/* <EmployeeTable employees={employees} updateEmployeeList={this.updateSearch} /> */}
        <EmployeeTable employees={this.state.filteredEmployees} 
        updateEmployeeList={this.updateSearch} 
        />
      </Container>

    );
  };

};

export default App;
