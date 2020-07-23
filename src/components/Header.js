import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'


import '../App.css';

const Header = () => {
    return (
        <Jumbotron fluid={false} className="header">
            <Container>
                <h2>Employee Directory</h2>
                <p>
                    Click on arrow to sort by first name or use search box to filter by name.
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Header;
