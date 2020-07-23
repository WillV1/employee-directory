import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'


import '../App.css';

const Header = () => {
    return (
        <Jumbotron fluid={false} className="header">
            <Container>
                <h1>Employee Directory</h1>
                <h5>
                    Click on arrow to sort by first name or use search box to filter by name.
                </h5>
            </Container>
        </Jumbotron>
    );
};

export default Header;
