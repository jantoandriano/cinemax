import { useEffect, useState } from "react";
import { fetchAsyncMovies, getAllMovies } from '../store/homeSlice'
import { useDispatch, useSelector } from "react-redux";
export const useGetMovies = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const allmovies = useSelector(getAllMovies);


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                dispatch(fetchAsyncMovies());
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false);
            }
        };
        getData();
    }, []);

    const trending = allmovies?.slice(0, 20).map(val => ({
        poster: val.Poster,
        title: val.Title,
        year: val.Year,
        imdbID: val.imdbID
    }))


    const popular = allmovies?.slice(21, 40).map(val => ({
        poster: val.Poster,
        title: val.Title,
        year: val.Year,
        imdbID: val.imdbID
    }))

    const topRated = allmovies?.slice(41, 60).map(val => ({
        poster: val.Poster,
        title: val.Title,
        year: val.Year,
        imdbID: val.imdbID
    }))

    const allMovies = allmovies?.slice(0, 20).map(val => ({
        poster: val.Poster,
        title: val.Title,
        year: val.Year,
        imdbID: val.imdbID
    }))


    return {
        allMovies,
        topRated,
        popular,
        trending,
        loading,
        error
    }

}