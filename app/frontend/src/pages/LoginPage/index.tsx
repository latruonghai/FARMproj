import React from "react";
import { Form, Button } from "react-bootstrap";
import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
const LoginForm = () => {

    return(
        <Form className="login-form">
            {/* <Avatar></Avatar> */}
            <Grid alignContent="center" className="login-grid">

                <Avatar className="login-ava"><LockOutlined/></Avatar>
            </Grid>
            <h1 className="login-title">Login</h1>
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
            <Typography>
                <Link underline="always" className="login-passwrd-forget"
                    onClick={e=>e.preventDefault()}>Quên mật khẩu?</Link>
            </Typography>
            <Form.Group className="mb-3"
                        controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"></Form.Check>

            </Form.Group>
            {/* <Form.Text ></Form.Text> */}

            <Button variant="primary" type="submit" size="sm" 
                    onClick={(e)=>e.preventDefault() }>Submit</Button>
        </Form>
    )
}

export default LoginForm;