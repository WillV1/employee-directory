import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';


import './App.css';

  class App extends React.Component{

    state = {
      search: ''
    }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }


  render() {
      return (
        <Container fluid>
          <Header />
          <Row className="search">
                    <Col>
                        <Form.Control type="text" className="form-control"
                            placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    </Col>
                </Row>
          <EmployeeTable />
        </Container>
    
      );
  };
  
};

export default App;
