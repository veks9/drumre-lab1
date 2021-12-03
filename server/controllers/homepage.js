import Movie from '../models/movie.js'

export const getMovies = async (req, res) => {
    await Movie.find({}, function(err, movies) {
        if(movies.length != 0) {
            res.status(200).send(movies);
        } else {
            res.status(404).send();
        }
    }).clone().catch(function(err){ console.log(err)});
}
