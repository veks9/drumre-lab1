import React, { Component } from "react";
import {Button, Form} from 'react-bootstrap';
import {Link, Navigate } from "react-router-dom";
import Facebook from './Facebook'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            email: '',
            password: '',
            error: '',
        };
    }

    onChange = (event) => {
        const {name, value} = event.target;
        this.setState(state => ({...state, [name]: value}))
    };

    onSubmit = (e) => {
        let self = this;

        e.preventDefault();

        const body = {
            email: this.state.email,
            password: this.state.password
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        };
        
        fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, options)
            .then(response => {
                if (response.status === 200) {
                    response.json().then(body => {
                        console.log(body);
                        self.props.authenticate(body);
                        self.setState({redirect: true})
                    });
                } else if (response.status === 401 || response.status === 400) {
                    response.text().then(body => {
                        self.setState({error: body})
                    });
                } else {
                    response.text().then(body => {
                        self.setState({error: body})
                    });
                }
            }).catch(error => console.log(error));
    };

    isValid = () => {
        return this.state.email.length > 0 && this.state.password.length > 5;
    };

    render() {
        if (this.props.authenticated) return <Navigate to={"/"}/>;
        return (

            <div className="inner">
                <Form onSubmit={this.onSubmit}>
                    <h3>Login</h3>

                    <Form.Group>
                        <Form.Label> Email </Form.Label>
                        <Form.Control name="email" type="email" placeholder="Email" onChange={this.onChange} required/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label> Password </Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={this.onChange} required/>                       
                    </Form.Group>
                    <p className="errorMessage">
                        {this.state.error}
                    </p>
                    <br/>
                    <div className="d-grid gap-2">
                        <Button type="submit" variant="dark" size="lg" disabled={!this.isValid()} > Login </Button>
                    </div>
                    <br/>
                    <p className="not-registered text-right">
                        <Link to="/register">Register here</Link>
                    </p>
                </Form>
                <hr />
                <div className="facebookButton">
                    <Facebook authenticate={this.props.authenticate} authenticated={this.props.authenticated}/>
                </div>
            </div>
        )
    }
}
