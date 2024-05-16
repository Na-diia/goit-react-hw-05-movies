import { useState, useEffect} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

import MovieByPerson from "components/MovieByPerson/MovieByPerson";
import { getPersonInformation, getMoviesByPerson } from "services/fetch-movie";
import { Button, PersonBox, Biography } from "./person.styled";
import { Poster, FlexWrap, Wrapper, List, Name, Span, Title} from "components/MovieData/movie-data.styled";
import defaultPersonImg from 'images/cast-default-img.jpg';
import { baseImgUrl } from "services/fetch-movie";

const Person = () => {
  const [person, setPerson] = useState([]);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loadImage, setLoadImage] = useState(false);
  
  const { personId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || 'movies';

  useEffect(() => {
     const fetchPersonData = async() => {
       try {
        const data = await getPersonInformation(personId);
        setPerson(data);
       } catch (error) {
         setPerson(null);
         setError(error);
         toast.error("Ops! Something went wrong!");
       };
     };

     const fetchMoviesByPerson = async() => {
      try{
        const items = await getMoviesByPerson(personId);
        setMovies(items);
      } catch (error) {
        setMovies(null);
        setError(error);
        toast.error("Ops! Something went wrong!");
      }
     }
     fetchPersonData();
     fetchMoviesByPerson();
  }, [personId]);

  const goBack = () => navigate(from);
  return (
    <PersonBox>
      <Button type="button" onClick={goBack}></Button>
      <FlexWrap>
      {error && <h2>Something went wrong</h2>}
      <Poster src={person.profile_path === null ? defaultPersonImg : baseImgUrl + `${person.profile_path}`} alt={person.name}
         onLoad={() => setLoadImage(true)}/>
      <SkeletonTheme baseColor="#E0CEA7 " highlightColor="#a5a5a5">
       {loadImage === false && <Skeleton width={267} height={400} />}
      </SkeletonTheme>
      <Wrapper>
      <Title>{person.name}</Title>
      <List>
      <li>
      <Name>Birthday : {!person.birthday ? (<Span>We don't have any information.</Span>) : (<Span>{person.birthday}</Span>) } </Name> </li>
      <li><Name>Place of birth : {!person.place_of_birth ? (<Span>We don't have any information.</Span>) : (<Span>{person.place_of_birth}</Span>)}</Name></li>
      <li><Name>Biography : {!person.biography ? (<Span>We don't have any informatiion yet.</Span>) : (<Biography>{person.biography}</Biography>)} </Name> </li>
      </List>
      </Wrapper>
      </FlexWrap>
      <MovieByPerson items={movies}/>
    </PersonBox>
  )
};

export default Person;