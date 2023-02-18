import { useState, useEffect, useCallback } from 'react';
import { toast } from "react-toastify";
import { useSearchParams } from 'react-router-dom';

import { getSearchMovies } from 'services/fetch-movie';

import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Button from 'components/Button/Button';

import { Container } from 'pages/Home/home.styled';

const Movies = () => {
 const [movies, setMovies] = useState([]);
 const [error, setError] = useState(null);
 const [page, setPage] = useState(1);

 const [searchParams, setSearchParams] = useSearchParams();
 const query = searchParams.get("query") || "";

 useEffect(() => {
    if(!query) {
      return;
    } const fetchSearchMovies = async () => {
        try {
            const searchValue = query.trim().toLowerCase();
            const data = await getSearchMovies(searchValue, page);
            if (data.length === 0) {
              toast.warn(`Sorry! We didn't find anything, change your request!`);
              return;
            }
            setMovies(data);
            setPage(page);
            return;
        }
        catch{
            setMovies(null);
            toast.error('Ops! Something went wrong!');
            setError(error)
        };
    } 
    fetchSearchMovies();
 }, [error, page, query]);

const searchFilms = query => {
  const nextMovies =  query !== '' && { query };
  setSearchParams(nextMovies);
};

const handleOnPageChange = useCallback(page => {
  setPage(page);
}, [setPage]);

return (
<Container>
{error && <h2>Something went wrong. Try again later.</h2>}
<SearchMovies search={query} onChange={searchFilms}/>
<MoviesList movies={movies} />
{page && movies.length !== 0 && <Button onClick={handleOnPageChange}
page={page}
totalPages={movies.total_pages}/>}
</Container>
)
};

export default Movies;