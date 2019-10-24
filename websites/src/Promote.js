import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Form } from 'react-bootstrap';
import './styles/Promote.scss';

function Promote() {
    const [databases, setDatabases] = useState([]);
    const [fromDatabase, setFromDatabase] = useState("");
    const [toDatabase, setToDatabase] = useState("");


    useEffect(() => {
            fetch('http://localhost:3001/databases')
                .then(res => res.json())
                .then((data) => {
                    setDatabases(data.databases);
                    console.log(databases);
                })
                .catch(console.log);
    }, []);

    
    
    return (
        <Container className="pt-4">
            <Row>
                <Col>
                    <Table bordered hover >
                        <thead >
                            <tr>
                                <th>Alias</th>
                                <th>Server</th>
                                <th>Port</th>
                                <th>Database name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {databases.map((database, index) => {
                                return( 
                                    <tr key={index} onClick={()=>setFromDatabase(database.alias)}>
                                        <td>{database.alias}</td>
                                        <td>{database.server}</td>
                                        <td>{database.port}</td>
                                        <td>{database.databaseName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Table bordered hover >
                        <thead >
                            <tr>
                                <th>Alias</th>
                                <th>Server</th>
                                <th>Port</th>
                                <th>Database name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {databases.map((database, index) => {
                                return( 
                                    <tr key={index} onClick={()=>setToDatabase(database.alias)}>
                                        <td>{database.alias}</td>
                                        <td>{database.server}</td>
                                        <td>{database.port}</td>
                                        <td>{database.databaseName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group as={Row} controlId="fromDatabase"> 
                            <Form.Label column sm="2">From:</Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={fromDatabase} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="toDatabase">
                            <Form.Label column sm="2">To:</Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={toDatabase} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Promote;