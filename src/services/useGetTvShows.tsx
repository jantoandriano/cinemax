import { useEffect, useState } from "react";
import { fetchAsyncShows, getAllShows } from '../store/homeSlice'
import { useDispatch, useSelector } from "react-redux";
export const useGetTvShows = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const allshows = useSelector(getAllShows);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                dispatch(fetchAsyncShows());
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false);
            }
        };
        getData();
    }, []);

    return {
        allshows,
        loading,
        error,
    }



}