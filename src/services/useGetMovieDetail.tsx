import { useEffect, useState } from "react";
import { fetchAsyncItemById, getMovieDetail } from '../store/homeSlice'
import { useDispatch, useSelector } from "react-redux";
export const useGetMovieDetail = (id) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const movieDetail = useSelector(getMovieDetail)


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                dispatch(fetchAsyncItemById(id));
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false);
            }
        };
        getData();
    }, []);

    return {
        loading,
        error,
        movieDetail,
    }

}