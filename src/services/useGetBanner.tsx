import { useEffect, useState } from "react";
import { useGetMovies } from "../services/useGetMovies";

export const useGetBanner = () => {

    const [banner, setBanner] = useState('');
  
    const { trending, loading } = useGetMovies();
    
    useEffect(() => {
    if (trending) {
        const bg = trending[Math.floor(Math.random() * 10)].poster; 
        setBanner(bg);
        
    }
    }, [trending]);

    return {
        banner,
        loading
    }

}