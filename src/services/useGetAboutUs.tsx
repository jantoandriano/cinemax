import { useEffect, useState } from "react";
import axios from "axios";

export const useGetAboutUs = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await axios.get('http://localhost:3002/xyzflix/contactus')
                setData(res.data);
                setLoading(false);

            } catch (error) {
                setError(error)
                setLoading(false);

            }
        };
        getData();
    }, []);


    return {
        data,
        loading,
        error
    }

}