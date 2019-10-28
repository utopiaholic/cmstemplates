import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Promote.scss';

function Promote() {
    const [promoteState, setPromoteState] = useState({
        databases: [],
        templates: [],
        promotionList: [],
        fromDatabase: "",
        toDatabase: "",
        step: 1,
        fromActiveId : -1,
        toActiveId : -1,
    });

    return (
        <div>
            {(promoteState.step == 1) && <Step1 promoteState={promoteState} setPromoteState={setPromoteState} />}
            {(promoteState.step == 2) && <Step2 promoteState={promoteState} setPromoteState={setPromoteState} />}
        </div>
    )
};

function Step1({ promoteState, setPromoteState }) {

    useEffect(() => {
        fetch('http://localhost:3001/databases')
            .then(res => res.json())
            .then((data) => {
                setPromoteState({
                    ...promoteState,
                    databases: data.databases,
                });
            })
            .catch(console.log);
    }, []);

    function updateFromDatabase(database, index)
    {
        setPromoteState({
            ...promoteState,
            fromDatabase: database.alias,
            fromActiveId: index
        });
    }

    function updateToDatabase(database, index)
    {
        setPromoteState({
            ...promoteState,
            toDatabase: database.alias,
            toActiveId: index
        });
    }

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
                            {promoteState.databases.map((database, index) => {
                                return (
                                    <tr key={index} onClick={()=>{
                                        updateFromDatabase(database, index);
                                    }} className={promoteState.fromActiveId === index ? "selected" : "" }>
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
                            {promoteState.databases.map((database, index) => {
                                return (
                                    <tr key={index} onClick={(e)=>{
                                        updateToDatabase(database, index);
                                    }} className={promoteState.toActiveId === index ? "selected" : "" }>
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
                                <Form.Control plaintext readOnly defaultValue={promoteState.fromDatabase} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="toDatabase">
                            <Form.Label column sm="2">To:</Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={promoteState.toDatabase} />
                            </Col>
                        </Form.Group>
                        <Button style={{ float: "right" }} variant="info" onClick={() => {
                            setPromoteState({
                                ...promoteState,
                                step: promoteState.step + 1
                            });
                        }}>
                            Next
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

function Step2({ promoteState, setPromoteState }) {

    useEffect(() => {
        fetch('http://localhost:3001/templates')
            .then(res => res.json())
            .then((data) => {
                setPromoteState({
                    ...promoteState,
                    templates: data.templates,
                });
            })
            .catch(console.log);
    }, []);

    
    function addToPromotionList(template) {
        setPromoteState({
            ...promoteState,
            promotionList : [...promoteState.promotionList, template]
        });
    }

    function removeFromPromotionList(template) {
        setPromoteState({
            ...promoteState,
            promotionList : promoteState.filter( x => x.id !== template.id )
        });
    }

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
                            {promoteState.templates.map((template, index) => {
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
                            {promoteState.promotionList.map((template, index) => {
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
                        <Button variant="dark" onClick={() => {
                            setPromoteState({
                                ...promoteState,
                                step: promoteState.step - 1
                            });
                        }}>
                            Back
                        </Button>
                        <Button style={{ float: "right" }} variant="info" onClick={() => {
                            setPromoteState({
                                ...promoteState,
                                step: promoteState.step + 1
                            });
                        }}>
                            Next
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Promote;