import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(data => {
                setLoading(false);
                setData(data.data);
                console.log(data)
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            })
    }, [url])

    return {
        data,
        loading
    };
}
 
export default useFetch;