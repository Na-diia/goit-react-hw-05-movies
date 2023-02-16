import { useState, useEffect, useCallback} from 'react'; 
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MoviesList from 'components/MoviesList/MoviesList';
import Button from 'components/Button/Button';

import { getAllMovie } from 'services/fetch-movie';

import { Container, MainTitle } from './home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
     setStatus('pending');
      const fetchAllMovies = async() => {
        try {
        const data = await getAllMovie(page);
        setMovies(data);
        setPage(page);
        setStatus('resolved');
        }
        catch(error) {
          setStatus('rejected');
          setError(error.message);
        }
      }
      fetchAllMovies();
    }, [page]);

  const handlePageChange = useCallback( 
    page => {
      setPage(page);
     }, [setPage]);

    return (
        <Container>
        {error && <h2>Something went wrong. Try again later.</h2>}
        <MainTitle>Trending today:</MainTitle>
        <SkeletonTheme baseColor="#E0CEA7" highlightColor="#a5a5a5">
        {!movies ? (
          <Skeleton count={15} style={{ height: 30, width: 300, marginTop: 15 }} />
        ) : (
          <div>
        <MoviesList movies={movies}/>
        {page && movies.length !== 0 &&  status !== 'pending' &&
          (<Button 
          page={page}
          totalPages={movies.total_pages}
          onClick={handlePageChange}/>)}</div>)}
        </SkeletonTheme>
        </Container>
    );
};

export default Home;