import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultPoster from 'images/default-poster.jpg';
import { baseImgUrl } from 'services/fetch-movie';
import { ImgBackdrop } from './movie-by-person.styled';
import { Item, List, Info, Character} from 'components/Cast/cast.styled';
import { Title } from 'components/Reviews/reviews.styled';

const MovieByPerson = ({items}) => {
   
    const location = useLocation();

    const elements = items.map(({ id, backdrop_path, title, vote_average, vote_count}) => 
        (<Item key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}><ImgBackdrop src={backdrop_path ? baseImgUrl + `${backdrop_path}` : defaultPoster} alt={title} /></Link>
           <Info>{title}</Info>
           <Character>{vote_average} ({vote_count})</Character>
        </Item>
    ));
 
 return (
 <div>
    {items.length >=1 ?
    (<List>{elements}</List>) : (
        <Title>We don't have any movies for this person.</Title>
    )}
 </div>
 )
};

export default MovieByPerson;

MovieByPerson.defaultProps = {
    items: [],
};

MovieByPerson.propTypes = {
   items: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired,
       backdrop_path: PropTypes.string,
       vote_average: PropTypes.number,
       vote_count: PropTypes.number,
   })),
};