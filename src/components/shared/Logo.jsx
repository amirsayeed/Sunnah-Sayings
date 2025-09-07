import React from 'react';
import logo from '../../assets/logo-removebg-preview.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to='/'>
            <div className='flex items-center gap-1'>
                <img src={logo} alt="" className='w-16 h-16 object-cover' />
                <h3 className='font-bold text-xl'>SunnahSayings</h3>
            </div>
        </Link>
    );
};

export default Logo;