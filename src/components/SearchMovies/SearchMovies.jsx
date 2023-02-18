import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

import {Wrap, Icon } from './search-movies.styled';

const SearchMovies = ({onChange, search}) => {
    return ( 
        <Wrap >
         <DebounceInput type="text" 
         debounceTimeout={500}
         name="search"
         value={search}
         placeholder="Search movie" 
         onChange={event => onChange(event.target.value)}
         autoComplete='off'
         autoFocus
         required/>
         <Icon />
        </Wrap>
    );
};

export default SearchMovies;

SearchMovies.propTypes = {
    onChange : PropTypes.func,
    search: PropTypes.string,
};