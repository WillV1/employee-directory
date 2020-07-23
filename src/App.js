import React from 'react';
import Container from 'react-bootstrap/Container';
import API from './components/API';

import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar';

import './App.css';


class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    search: '',
    filteredEmployees: [],
    employees: [],
    sort: 'asc'
  }
}

  componentDidMount() {
    API.search()
    .then( (response) => {
      console.log(response);
      let newArray = [];
      for (let i = 0; i < response.data.results.length; i++) {
        newArray.push(response.data.results[i])
      }
      console.log(newArray);
      this.setState({ filteredEmployees: newArray, employees: newArray });
    });

  };

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
    this.renderSearchList();
  }

  renderSearchList = () => {
    const { search } = this.state
    if(search === "") {
      return this.setState({filteredEmployees: this.state.employees})
    }
    let searched = search.charAt(0).toUpperCase() + search.slice(1);
    let employees = this.state.filteredEmployees.filter((employee) => {
      return employee.name.first.indexOf(searched) >= 0;
    })


    this.setState({ filteredEmployees: employees })


  }

  onSortChange = () => {
    var order = this.state.direction === 'asc' ? 'desc' : 'asc';


    this.setState({
        filteredEmployees: [...this.state.filteredEmployees].sort( (a,b) =>{ 
         if(a.name.first < b.name.first) {
           return order === 'asc' ? -1 : 1;
         }
         if (a.name.first > b.name.first) {
          return order === 'asc' ? 1 : -1;
         }
         return 0;
        }),
        direction: order          
    })
	};



  render() {

    return (
      
      <Container fluid={false}>
        <Header />
        <SearchBar value={this.state.search}
          handleInputChange={this.updateSearch}
        />
        <EmployeeTable employees={this.state.filteredEmployees}
          updateEmployeeList={this.updateSearch}
          onSortChange={this.onSortChange}
        />
      </Container>

    );
  };

};

export default App;
