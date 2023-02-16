import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "components/Loader/Loader";
import SharedLayout from "components/SharedLayout/SharedLayout";

const Home = lazy(() => import ("pages/Home/Home"));
const Movies = lazy(() => import ("pages/Movies/Movies"));
const MovieDetails = lazy(() => import ("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import ("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export const App = () => {
  return (
    <div>
    <Suspense fallback={<Loader />}>
    <Routes>
    <Route path="/" element={<SharedLayout />}>
    <Route index element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/movies/:movieId" element={<MovieDetails />} >
     <Route path="cast" element={<Cast />} />
     <Route path="reviews" element={<Reviews />} />
    </Route> 
    <Route path="*" element={<Home />} />
    </Route>
    </Routes>
    </Suspense>
    <ToastContainer autoClose={1500}/>
    </div>
  );
};