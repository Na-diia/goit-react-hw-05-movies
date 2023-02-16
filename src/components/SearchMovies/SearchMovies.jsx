import PropTypes from 'prop-types';
import { useState, memo } from 'react';
import { toast } from 'react-toastify';

import { Form, Input } from './search-movies.styled';

const SearchMovies = ({onSubmit}) => {
    const [search, setSearch] = useState('');

    const handleChange = ({target})=> {
        const {value} = target;
        setSearch(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(search.trim() === '') {
          toast.warn('Enter words to search for!');
          return;
        }
        onSubmit(search);
    };
  
    return ( 
        <Form onSubmit={handleSubmit} >
         <Input type="text" 
         name="search"
         value={search}
         placeholder="Search movie" 
         onChange={handleChange} 
         autoComplete='off'
         autoFocus
         required/>
        </Form>
    );
};

export default memo(SearchMovies);

SearchMovies.propTypes = {
    onSubmit : PropTypes.func.isRequired,
};