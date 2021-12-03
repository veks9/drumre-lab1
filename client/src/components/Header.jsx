import React, { Component } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
               <Navbar bg="light" variant="light" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">DRUME</Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                            </Nav>

                            {this.props.authenticated
                                ?
                                <Nav>
                                    {this.props.user ?
                                        <Nav.Link href="/">  
                                            <img src={this.props.user.picture} alt=""/>
                                            {' ' + this.props.user.name + ' ' + this.props.user.surname} 
                                        </Nav.Link>
                                        :
                                        <div></div>
                                    }
                                    <Button variant="secondary" onClick={this.props.logout}> Logout </Button>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                </Nav>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
