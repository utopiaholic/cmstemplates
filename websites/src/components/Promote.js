import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Promote.scss';

function Promote() {
    const [databases, setDatabases] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [fromDatabase, setFromDatabase] = useState("");
    const [toDatabase, setToDatabase] = useState("");
    const [step, setStep] = useState(1);
    
    const [promotionList, setPromotionList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/databases')
            .then(res => res.json())
            .then((data) => {
                setDatabases(data.databases);
                console.log(databases);
            })
            .catch(console.log);
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/templates')
            .then(res => res.json())
            .then((data) => {
                setTemplates(data.templates);
                console.log(templates);
            })
            .catch(console.log);
    }, []);

    function nextStep() {
        setStep(step + 1);
    }

    function previousStep() {
        setStep(step - 1);
    }

    function onSubmit() {
        console.log("submitted");
    }

    function addToPromotionList(template) {
        setPromotionList([...promotionList, template]);
    }

    function removeFromPromotionList(template) {
        setPromotionList(promotionList.filter( x => x.id !== template.id ));
    }

    function step1() {
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
                                    return (
                                        <tr key={index} onClick={() => setFromDatabase(database.alias)}>
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
                                    return (
                                        <tr key={index} onClick={() => setToDatabase(database.alias)}>
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
                        <Form >
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
                            <Button style={{ float: "right" }} variant="info" onClick={nextStep}>
                                Next
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

    function step2() {
        return (
            <Container className="pt-4">
                <Row>
                    <Col>
                        <h5>Available Templates</h5>
                        <Table bordered hover >
                            <thead >
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Revision Major</th>
                                    <th>Revision Minor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {templates.map((template, index) => {
                                    return (
                                        <tr key={index} onClick={() => addToPromotionList(template)}>
                                            <td></td>
                                            <td>{template.name}</td>
                                            <td>{template.revision_major}</td>
                                            <td>{template.revision_minor}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <h5>Promotion List</h5>
                        <Table bordered hover >
                            <thead >
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Revision Major</th>
                                    <th>Revision Minor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {promotionList.map((template, index) => {
                                    return (
                                        <tr key={index} onClick={() => removeFromPromotionList(template)}>
                                            <td></td>
                                            <td>{template.name}</td>
                                            <td>{template.revision_major}</td>
                                            <td>{template.revision_minor}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form >
                            <Button variant="dark" onClick={previousStep}>
                                Back
                            </Button>
                            <Button style={{ float: "right" }} variant="info" onClick={nextStep}>
                                Next
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <div>
            {(step == 1) && step1()}
            {(step == 2) && step2()}
        </div>
    )
};


export default Promote;