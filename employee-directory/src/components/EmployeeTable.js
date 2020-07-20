import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


const EmployeeTable = (props) => {



    const renderEmployees = (employee, index) => {
        return (
            <tr key={index}>
                <td>{employee.photo}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
            </tr>
        )
    }
    return (
        <Container>
            <Table bordered>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
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
