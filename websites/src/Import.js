import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './styles/Import.scss';

function Import() {
    const [databases, setDatabases] = useState([]);
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
        <div className="container pt-4">
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Alias</th>
                        <th>Server</th>
                        <th>Port</th>
                        <th>Database name</th>
                    </tr>
                </thead>
                <tbody>
                    {databases.map((database, index) => {
                        return( 
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{database.alias}</td>
                                <td>{database.server}</td>
                                <td>{database.port}</td>
                                <td>{database.databaseName}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
};

export default Import;