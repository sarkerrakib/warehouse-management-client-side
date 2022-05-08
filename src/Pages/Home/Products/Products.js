import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Products.css';

const Products = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container pb-5'>
            <div className="row">
                
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;