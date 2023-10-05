import { useEffect, useState } from "react";
import { fetchAsyncShows, getAllShows } from '../store/homeSlice'
import { useDispatch, useSelector } from "react-redux";

export const useGetTvShows = (query) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncShows(query));

    }, []);

    const res = useSelector(getAllShows);    


    const allshows = res && res?.Search?.map(val => ({
        poster: val.Poster,
        title: val.Title,
        year: val.Year,
        imdbID: val.imdbID
    }))

    return {
        allshows,
    }



}