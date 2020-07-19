import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';

const Header = () => {
    return (
        <Container fluid>
            <Row className="header">
                <Col><h2>Employee Directory</h2></Col>
            </Row>
        </Container>
    );
};

export default Header;
