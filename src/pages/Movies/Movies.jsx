import { useState, useEffect, useCallback } from 'react';
import { toast } from "react-toastify";

import { getSearchMovies } from 'services/fetch-movie';

import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Button from 'components/Button/Button';

import { Container } from 'pages/Home/home.styled';

const Movies = () => {
 const [movies, setMovies] = useState([]);
 const [search, setSearch] = useState('')
 const [page, setPage] = useState(1);
 const [error, setError] = useState(null);

 useEffect(() => {
    if(search) {
    const fetchSearchMovies = async () => {
        try {
            const searchValue = search.trim().toLowerCase();
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
            setError({error : error.message})
        };
    } 
    fetchSearchMovies();
   }
 }, [error, page, search]);

 const searchFilms =(query) => {
   if(query === search) {
     toast.warn('This is the same query!');
     return;
   }
   setSearch(query)
   setMovies([]);
 };

 const handleOnPageChange = useCallback(page => {
  setPage(page)
 }, [setPage]);

return (
<Container>
{error && <h2>Something went wrong. Try again later.</h2>}
<SearchMovies onSubmit={searchFilms}/>
<MoviesList movies={movies} />
{page && movies.length !== 0 && <Button onClick={handleOnPageChange}
page={page}
totalPages={movies.total_pages}/>}
</Container>
)
};

export default Movies;