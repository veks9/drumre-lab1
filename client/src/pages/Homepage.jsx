import React, { Component } from 'react'
import MoviesList from '../components/MoviesList'

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           movies: []
        };
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
        
        fetch(`${process.env.REACT_APP_BACKEND_URL}/getMovies`, options)
            .then(response => {
                if (response.status === 200) {
                    response.json().then(body => {
                        this.setState({movies: body})
                    });
                } 
            }).catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <div class="spacer"></div>
                <div class="movies-container">
                    <MoviesList movies={this.state.movies}/>
                </div>
            </div>
        )
    }
}
