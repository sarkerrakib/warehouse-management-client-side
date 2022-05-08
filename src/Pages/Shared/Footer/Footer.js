import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer text-center '>
            <p><small>Copyright &#169; {year} || WareHouse <br /> All rights reserved </small></p>
        </footer>
    );
};

export default Footer;