import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/Menu.scss';

export const Menu = ({page, setPage}) => {
    const [pages, setPages] = useState([
        { name: "Promote", id : 1 },
        { name: "Export", id : 2 },
        { name: "Import", id : 3 }
    ]);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav defaultActiveKey={pages[0].name}>
                    {pages.map(p => {
                        return (
                            <Nav.Item key={p.id} className="mr-4 " >
                                <Nav.Link eventKey={p.name} onClick={()=>{ setPage(p.name) }} >{p.name}</Nav.Link>
                            </Nav.Item>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;