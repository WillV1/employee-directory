import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';


import './App.css';


class App extends React.Component {

  state = {
    search: ''
  }

  renderSearchList = employees => {
    const {search} = this.search
    if(search !== '' && employee.name.indexOf(search) === -1){
      return null
    }
  }

  

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }


  render() {

    const {search} = this.state;
    const filteredEmployees = employeesList.filter(employees => {
      return employee.name.indexOf(employee) !== -1
    })
    return (
      <Container fluid={false}>
        <Header />
        <Row>
          <Col sm={2}>sm=8</Col>
          <Col sm={10}><span><Form.Control type="text" className="form-control"
            placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
            <Button variant="primary">Search</Button>{' '}</span>
            </Col>
        </Row>
        <EmployeeTable updateEmployeeList={this.updateSearch}/>
      </Container>

    );
  };

};

export default App;
