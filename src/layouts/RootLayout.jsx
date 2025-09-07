import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <div className='max-w-[1500px] mx-auto'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;