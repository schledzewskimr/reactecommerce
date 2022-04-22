import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import "./index.css";

function FillForm() {
    return (
        <div className="FillFormContent">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                we'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicMessage">
                <Form.Label>message</Form.Label>
                <Form.Control type="message" placeholder="Message" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to whatever terms and conditions you may set" />
            </Form.Group>
            <Button variant="light" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}
export default FillForm;