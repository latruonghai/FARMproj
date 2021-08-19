import React from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {

    return(
        <Form className="login-form">
            <Form.Group className="mb-3"
                        controlId="formBasicEmail">
                <Form.Label >Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">Type your email here</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3"
                        controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
                {/* <Form.Text className="text-muted">Type your email here</Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"></Form.Check>

            </Form.Group>

            <Button variant="primary" type="submit" size="sm">Submit</Button>
        </Form>
    )
}

export default LoginForm;