import React, { Component } from "react";
import {Button, Form, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Facebook from './Facebook'

export default class Login extends Component {
    render() {
        return (
            <div className="inner">
                <Form>
                    <h3>Login</h3>

                    <Facebook />
                    <hr />

                    <Form.Group>
                        <Form.Label> Username </Form.Label>
                        <Form.Control name="username" type="text" placeholder="Username" required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label> Password </Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required/>                       
                    </Form.Group>
                    <br/>
                    <div className="d-grid gap-2">
                        <Button type="submit" variant="dark" size="lg" > Login </Button>
                    </div>
                    <br/>
                    <p className="not-registered text-right">
                        <Link to="/register">Register here</Link>
                    </p>
                </Form>
            </div>
        )
    }
}
