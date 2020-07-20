import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import '../App.css';

const SearchBar = (props) => {


    return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={10}><span><Form.Control type="text" className="form-control"
                    placeholder="Search" value={props.value} onChange={props.handleInputChange} />
                    <Button variant="primary" onClick={props.handleFormSubmit}>Search</Button>{' '}</span>
                </Col>
            </Row>
        </Container>
    )
}
export default SearchBar;