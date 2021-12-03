import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class MovieCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={this.props.movie.poster} />
                <Card.Body>
                    <Card.Title>{this.props.movie.title}</Card.Title>
                    <Card.Text>
                        {this.props.movie.plot}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
