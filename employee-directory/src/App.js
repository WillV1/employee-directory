import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from "axios";
// import API from './components/API';

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
    search: '',
    filteredEmployees: []
  }


  // componentDidMount() {
  //   this.employeeGroup();
  // }

  componentDidMount() {
    // axios.get({
    //   url: 'https://randomuser.me/api/?results=10',
    //   dataType: 'json',
    //   success: function(data) {
    //     console.log(data);
    //   }
    // }).then(res => {
    //   const employees = res.data;
    //   this.setState({ filteredEmployees });
    // })

    axios.get('https://randomuser.me/api/?results=10')
     .then((response) => {
       console.log(response);
       this.setState({filteredEmployees})
     })
    .catch((error)=>{
       console.log(error);
    });

  };

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  renderSearchList = () => {
    const { search } = this.state
    let filteredEmployees = employees.filter((employee) => { 
      return employee.name.indexOf(search) >= 0;
    })


    this.setState({filteredEmployees})


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
