import { useEffect, useState } from "react"

export const useGetMyList = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        let storedNames = localStorage.getItem("mylist");
        let listRes = JSON.parse(storedNames as string);
        setList(listRes);
        setLoading(false)

    }, [])

    return {
        list,
        loading
    }
}