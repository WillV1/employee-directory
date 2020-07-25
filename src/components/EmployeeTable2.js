import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EmployeeTable2 = (props) => {



    const renderEmployees = (employee, index) => {
        return (
            <tr key={index}>
                <td>{employee.first_name} {employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
                <td>{employee.job}</td>
            </tr>
        )
    }
    return (
        
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name<button className="button" onClick={() => props.onSortChange()}><FontAwesomeIcon icon={faArrowsAltV} /></button></th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(renderEmployees)}
                </tbody>
            </Table>
        </Container>
    )
}


export default EmployeeTable2;
