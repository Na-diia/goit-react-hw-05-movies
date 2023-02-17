import PropTypes from 'prop-types';

import { Form, Input } from './search-movies.styled';

const SearchMovies = ({onSubmit, search}) => {
    return ( 
        <Form  >
         <Input type="text" 
         name="search"
         value={search}
         placeholder="Search movie" 
         onChange={e => onSubmit(e.target.value)}
         autoComplete='off'
         autoFocus
         required/>
        </Form>
    );
};

export default SearchMovies;

SearchMovies.propTypes = {
    onSubmit : PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
};