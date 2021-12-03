import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { Stack } from 'react-bootstrap';

export default class MoviesList extends Component {
    render() {
        return (
            <div className="movies-container">
                { this.props.movies.length > 0 ? this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />) : <p>Nothing to show</p>}
            </div>
        )
    }
}