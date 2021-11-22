import React, { Component } from "react";
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className="inner">
                <Form>
                    <h3>Register</h3>

                    <Form.Group>
                        <Form.Label> Name </Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" required/>
                    </Form.Group>

                    <br/>
                    
                    <Form.Group>
                        <Form.Label> Surname </Form.Label>
                        <Form.Control name="surname" type="text" placeholder="Surname" required/>
                    </Form.Group>

                    <br/>

                    <Form.Group>
                        <Form.Label> Email </Form.Label>
                        <Form.Control name="email" type="email" placeholder="Email" required/>
                    </Form.Group>

                    <br/>

                    <Form.Group>
                        <Form.Label> Password </Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required/>                       
                    </Form.Group>

                    <br/>

                    <Form.Group>
                        <Form.Label> Re-enter password </Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required/>                       
                    </Form.Group>

                    <br/>

                    <div className="d-grid gap-2">
                        <Button type="submit" variant="dark" size="lg" > Register </Button>
                    </div>
                    <br/>
                    <p className="not-registered text-right">
                        <Link to="/login">Have an account? Log in here</Link>
                    </p>
                </Form>
            </div>
        )
    }
}
