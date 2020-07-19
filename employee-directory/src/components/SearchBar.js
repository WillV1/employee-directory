import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';

class SearchBar extends React.Component {

    state = {
        search: ''
    }

    onChange = e => {
        this.setState({search: e.target.value});
    }

    render() {
        return (
            <Container>
                <Row className="search">
                    <Col>
                        <Form.Control type="text" className="form-control"
                            placeholder="Search" onChange={this.onChange} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default SearchBar;