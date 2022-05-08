import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Product = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/store')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container '>
            <div className="row">
                <h1 className='text-dark text-center mt-5 pb-3 '>Inventory Items</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
                <div className="text-center">
                    <Link to='/manageitems'>
                        <button className='btn logButton mt-5'><a href="http://localhost:3000/manageitems">Manage Inventories</a> </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Product;