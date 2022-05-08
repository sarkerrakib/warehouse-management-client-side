import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './ManageItems.css';

const ManageItems = () => {
    const [services, setServices] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }
    return (
        <div>
            <div className='w-50 mx-auto'>
                
                {
                    services.map(service => <div key={service._id}>
                        <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button> </h5>
                    </div>)
                }

            </div>
            <div className="text-center">
                <Link to='/addproduct'>
                    <button className='btn logButton m-5'><a href="http://localhost:3000/addproduct">Add Inventory</a> </button>
                </Link>
            </div>
        </div>

    );
};

export default ManageItems;