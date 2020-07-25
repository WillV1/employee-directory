import React from 'react';
import Container from 'react-bootstrap/Container';
import employees from './data/employees.json';


import Header from './components/Header';
import EmployeeTable2 from './components/EmployeeTable2';
import SearchBar from './components/SearchBar';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      filteredEmployees: employees,
      employees: employees,
      sort: 'asc'
    }
  }

  
    updateSearch = (event) => {
    this.setState({ search: event.target.value },);
  }

  onSortChange = () => {
    var order = this.state.direction === 'asc' ? 'desc' : 'asc';


    this.setState({
      filteredEmployees: [...this.state.filteredEmployees].sort((a, b) => {
        if (a.first_name < b.first_name) {
          return order === 'asc' ? -1 : 1;
        }
        if (a.first_name > b.first_name) {
          return order === 'asc' ? 1 : -1;
        }
        return 0;
      }),
      direction: order
    })
  };



  render() {

    const { filteredEmployees, search } = this.state;
    const employees = filteredEmployees.filter(filteredEmployee =>
      filteredEmployee.first_name.toLowerCase().includes(search.toLowerCase())
    )



    return (

      <Container fluid={false}>
        <Header />
        <SearchBar value={this.state.search}
          handleInputChange={this.updateSearch}
        />
        <EmployeeTable2 employees={employees}
          updateEmployeeList={this.updateSearch}
          onSortChange={this.onSortChange}
        />
      </Container>

    );
  };

};

export default App;
