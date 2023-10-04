import { useEffect, useState } from "react";
import axios from "axios";

type Response = {
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
}

type ResponseData = {
    title: string;
    poster: string;
    year: string;
    imdbID: string;
}

export const useGetMovies = () => {
    const [trending, setTrending] = useState<ResponseData | null>(null);
    const [topRated, setTopRated] = useState<ResponseData | null>(null);
    const [popular, setPopular] = useState<ResponseData | null>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await axios.get('http://localhost:3002/xyzflix/listmovie');
                const trendings: ResponseData = res.data.slice(0,10).map((val: Response) => ({
                    poster: val.Poster,
                    title: val.Title,
                    year: val.Year,
                    imdbID: val.imdbID
                }));

                const topRated: ResponseData = res.data.slice(21,30).map((val: Response) => ({
                    poster: val.Poster,
                    title: val.Title,
                    year: val.Year,
                    imdbID: val.imdbID
                }));

                const populars:ResponseData = res.data.slice(10,20).map((val: Response) => ({
                    poster: val.Poster,
                    title: val.Title,
                    year: val.Year,
                    imdbID: val.imdbID
                }));

                setTopRated(topRated);
                setPopular(populars)
                setTrending(trendings);
                setLoading(false);

            } catch (error) {
                setError(error)
                setLoading(false);

            }
        };
        getData();
    }, []);


    return {
        topRated,
        popular,
        trending,
        loading,
        error
    }

}