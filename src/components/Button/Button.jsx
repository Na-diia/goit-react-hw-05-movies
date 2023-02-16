import PropTypes from 'prop-types';

import { Wrap, Btn } from './button.styled';

const Button =({page, totalPages, onClick}) => {

    return (
        <Wrap>
         {page >= 2 &&<Btn type='button' 
         disabled={page === 1}
         onClick={() => onClick(page - 1)}>Prev page</Btn>}
         <Btn type='button'  
         onClick={() => onClick(page + 1)} 
         disabled={page === totalPages}>Next page</Btn>
        </Wrap>
    )
};

export default Button;

Button.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number,
    onClick: PropTypes.func.isRequired,
};