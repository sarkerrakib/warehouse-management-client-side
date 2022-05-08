import React from 'react';
import notFound from '../../../images/notFound.png';

const NotFound = () => {
    return (
        <div className='container'>
            <img className='w-100 ' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;