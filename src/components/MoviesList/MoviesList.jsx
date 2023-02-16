import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { Item, List, MovieLink } from './movies-list.styled';

const MoviesList = ({movies}) => {
  const location = useLocation();

  const elements = movies.map(({title, id}) => 
    <Item key={id} >
    <MovieLink state={{from: location}} to={`/movies/${id}`}>{title}</MovieLink>
    </Item>);

  return (
     <List>
     {elements}
     </List>
  )
};

export default MoviesList;

MoviesList.defaultProps = {
   movies: [],
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};