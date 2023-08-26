import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BookingForm.css';


export default function BookingForm() {
    return (
        <div className="centerForm">
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Form.Control type="text"  placeholder="Enter your city"/>
                </Nav.Item>
                <Nav.Item>
                    <Button className="btn searcBtn jsSearchBtn">
                    <FontAwesomeIcon icon="fa-search" />
                        Search
                    </Button>
                </Nav.Item>
            </Nav>
            </div>


    )
}