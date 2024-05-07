import { useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getMovieCast, baseImgUrl } from 'services/fetch-movie';

import { List, ImageActors, Info, Item, Character } from './cast.styled';
import { Title } from 'components/Reviews/reviews.styled';
import defaultCastImg from '../../images/cast-default-img.jpg';

const Cast = () => {
    const [items, setItems] = useState([]);
    const {movieId} = useParams();

    const location = useLocation();

    useEffect(() => {
      if(items) {
        const fetchCast = async() => {
          try{
            const data = await getMovieCast(movieId);
            setItems(data);
            return;
           }
          catch{
            setItems(null);
        }};
        fetchCast();
    };
    }, [items, movieId]);

    const elements = items.map(({id, name, profile_path, character}) => 
        (<Item key={id}>
<Link state={{from: location}} to={`/person/${id}`}><ImageActors src={profile_path ? baseImgUrl + `${profile_path}` : defaultCastImg} alt={name} /></Link>
          <Info>{name}</Info>
          <Character>{character}</Character>
        </Item>));

    return (
      <div>
      {items.length >= 1 ? (<List>
        {elements}
        </List>) : ( 
        <Title>We don't have any cast for this movie.</Title>
      )}
      </div>
    );
};

export default Cast;