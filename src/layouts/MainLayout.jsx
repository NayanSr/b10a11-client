import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col min-h-screen'>
           <Header/>
           <div className='flex-grow bg-teal-50'>
            <Outlet/>
           </div>
           <Footer />
        </div>
    );
};

export default MainLayout;