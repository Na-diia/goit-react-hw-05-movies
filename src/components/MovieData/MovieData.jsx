import PropTypes from 'prop-types';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { baseImgUrl } from 'services/fetch-movie';
import defaultPoster from '../../images/default-poster.jpg';
import { Title, Wrapper, Poster, FlexWrap, List, Name, Span } from './movie-data.styled';


const MovieData = ({name, img, text, release, tag, score, genre, count}) => {
  const [loadImage, setLoadImage] = useState(false);

    return (
      <FlexWrap>
      <Poster src={img === null ?  defaultPoster : baseImgUrl + `${img}`} alt={name}
      onLoad={() => setLoadImage(true)}/>
      <SkeletonTheme baseColor="#E0CEA7 " highlightColor="#a5a5a5">
       {loadImage === false && <Skeleton width={267} height={400} />}
    </SkeletonTheme>
      <Wrapper>
      <Title>{name}</Title>
      <List>
      <li> 
      <Name>User score: {!score ? (<Span>No ratings yet</Span>) : (<Span>{score} ({count}).</Span>)}</Name>
      </li>
      <li>
      <Name>Slogan: <Span>{!tag  ? (<Span>We don't have any slogan for this movie.</Span>) : tag}</Span></Name>
      </li>
      <li>
      <Name>Release date: <Span>{release}</Span></Name>
      </li>
      <li>
      <Name>Genres: <Span>{!genre ? (<Span>We don't have any genre for this movie</Span>) : genre}.</Span></Name>
      </li>
      <li>
      <Name>Overview: <Span>{!text ? (<Span>We don't have any overview for this movie.</Span>) : text}</Span></Name>
      </li>
      </List>
      </Wrapper> 
    </FlexWrap>);
};

export default MovieData;

MovieData.propTypes = {
    name: PropTypes.string, 
    img: PropTypes.string, 
    text: PropTypes.string, 
    release: PropTypes.string, 
    tag: PropTypes.string,
    score: PropTypes.number,
    count: PropTypes.number,
};