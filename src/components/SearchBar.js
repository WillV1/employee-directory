import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';

const SearchBar = (props) => {


    return (
        <Container>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <Form>
                    <Form.Control id="inline" type="search" className="form-control"
                        placeholder="Search" value={props.value} onChange={props.handleInputChange} />
                </Form>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    )
}
export default SearchBar;