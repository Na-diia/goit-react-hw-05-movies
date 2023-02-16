import { useState, useEffect} from 'react';
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

import { getMovieDetails } from 'services/fetch-movie';
import MovieData from 'components/MovieData/MovieData';
import Loader from 'components/Loader/Loader';

import { Box, Button, CastLink, ReviewsLink } from './movie-details.styled';

const MovieDetails = () => {
    const [movie, setMovie] = useState([]);

    const { movieId } = useParams();
    const navigate = useNavigate();

    const location = useLocation();
    const from =location.state?.from || "/movies";

    useEffect(() => {
      const fetchMovieDetails = async() => {
        try{
          const data = await getMovieDetails(movieId);
          setMovie(data);
        }
        catch(error){
           setMovie(null);
           toast.error('Ops! Something went wrong!');
        };
      };
      fetchMovieDetails();
    }, [movieId]);

    const goBack = () => navigate(from);

    const genresList = movie?.genres?.map(genre => genre.name).join(', ');
   
    return (
     <Box backdrop={movie.backdrop_path}>
    <Button type='button' onClick={goBack}></Button>
    {!movie ? (<Loader />) : <MovieData 
     genre={genresList}
     score={movie.vote_average}
     count={movie.vote_count}
     name={movie.title}
     img={movie.poster_path}
     text={movie.overview} 
     release={movie.release_date}
     tag={movie.tagline}/>}
     <CastLink state={{from}} to={`/movies/${movieId}/cast`}>Cast</CastLink>
     <ReviewsLink state={{from}} to={`/movies/${movieId}/reviews`}>Reviews</ReviewsLink>
     <Outlet />
    </Box>
    )
};

export default MovieDetails;