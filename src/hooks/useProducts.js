import { useEffect, useState } from "react";

const useProducts = () =>{
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/store')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
}

export default useProducts;