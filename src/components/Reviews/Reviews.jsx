import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import { getMovieReviews } from 'services/fetch-movie';

import { WrapperReview, ReviewsList, ReviewItem, AuthorText, AuthorSpan, Title,  TextReview } from './reviews.styled';

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const { movieId } = useParams();

   useEffect(() => {
      if(reviews) {
     const fetchReviews = async () => {
        try {
            const data = await getMovieReviews(movieId);
            setReviews(data);
            setIsLoading(true);
            return;
        }
        catch{
            setReviews(null);
        }
        finally {
            setIsLoading(false);
        };
     }
     fetchReviews();
    };
   }, [movieId, reviews]);

    return (
 <div>
   {!reviews ? (
        <SkeletonTheme baseColor="#E0CEA7" highlightColor="#a5a5a5">
          <Skeleton style={{ height: 30, width: 250, marginBottom: 15 }} />
          <Skeleton count={5} style={{ height: 20, width: 600, marginBottom: 5 }} />
        </SkeletonTheme>
      ) : reviews.length === 0 || isLoading ?  (<Title>We don't have any reviews for this movie.</Title>) : (
    <ReviewsList>
    {reviews.map(({id, author, content}) => (
        <ReviewItem key={id}>
        <WrapperReview>
        <AuthorText>Author: <AuthorSpan>{author}</AuthorSpan></AuthorText>
        <TextReview>{content}</TextReview>
        </WrapperReview>
        </ReviewItem>
        ))}
    </ReviewsList>)}
  </div>
 );
}; 

export default Reviews;