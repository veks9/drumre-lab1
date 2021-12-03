import axios from 'axios';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Movie from '../models/movie.js'

dotenv.config({ path: `../.env` });
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

var movieId = [];

var options = {
    method: 'GET',
    url: `https://${process.env.X_RAPIDAPI_HOST}/title/get-most-popular-movies`,
    params: {homeCountry: 'US', purchaseCountry: 'US', currentCountry: 'US'},
    headers: {
      'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY
    }
  };
  
await axios.request(options).then(function (response) {
    response.data.forEach(element => {
        movieId.push(element.split('/')[2]);
    }); 
  }).catch(function (error) {
      console.error(error);
});


async function getMovies(id) {
    options = {
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`,
      };
      
    await axios.request(options).then(function (response) {
        const movie = {
            title: response.data.Title,
            year: response.data.Year,
            poster: response.data.Poster
        }
        Movie.create(movie, function(err) {
            if(err) {
                console.log(err);
            }
       });
      }).catch(function (error) {
          console.error(error);
    });
}


movieId.forEach(id => {
    getMovies(id);
});


  
