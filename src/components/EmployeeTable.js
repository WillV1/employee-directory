import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EmployeeTable = (props) => {



    const renderEmployees = (employee, index) => {
        return (
            <tr key={index}>
                <td><img src={employee.picture.thumbnail} alt='employee thumbnail'/></td>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
            </tr>
        )
    }
    return (
        
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name<button className="button" onClick={() => props.onSortChange()}><FontAwesomeIcon icon={faArrowsAltV} /></button></th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(renderEmployees)}
                </tbody>
            </Table>
        </Container>
    )
}


export default EmployeeTable;
