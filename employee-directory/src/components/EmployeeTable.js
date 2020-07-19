import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

// import TableHeader from './components/TableHeader';
// import TableBody from './components/TableBody';

const EmployeeTable = () => {

    const employees = [
        {
            id: 1,
            name: "Mike",
            email: '123@gmail.com',
            phone: '919-123-4567'
        },
        {
            id: 2,
            name: "Joe",
            email: '123@gmail.com',
            phone: '919-123-4567'
        },
        {
            id: 3,
            name: "Sue",
            email: '123@gmail.com',
            phone: '919-123-4567'
        },
        {
            id: 4,
            name: "Billy",
            email: '123@gmail.com',
            phone: '919-123-4567'
        }
    ];

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
                    {employees.map(renderEmployees)}
                </tbody>
            </Table>
        </Container>
    )
}


export default EmployeeTable;
