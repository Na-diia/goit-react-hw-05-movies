import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getMovieCast, baseImgUrl } from 'services/fetch-movie';

import { List, ImageActors, Info, Item, Character } from './cast.styled';
import { Title } from 'components/Reviews/reviews.styled';
import defaultCastImg from '../../images/cast-default-img.jpg';

const Cast = () => {
    const [items, setItems] = useState([]);
    const {movieId} = useParams();

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
          <ImageActors src={profile_path ? baseImgUrl + `${profile_path}` : defaultCastImg} alt={name} />
          <Info>{name}</Info>
          <Character>{character}</Character>
        </Item>));

    return (
      <div>
      {items.length >= 1 ? (<List>
        {elements}
        </List>) : (
          <SkeletonTheme baseColor="#EFDCB2" highlightColor="#444">
        <Title> <Skeleton count={1} />We don't have any cast for this movie.</Title>
        </SkeletonTheme>
      )}
      </div>
    );
};

export default Cast;