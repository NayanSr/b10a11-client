import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        // <div className='w-11/12 mx-auto flex flex-col min-h-screen'>
        <div className=' mx-auto flex flex-col min-h-screen dark:bg-gray-700 dark:text-white'>
           <Header/>
           <div className='max-w-[1400px] mx-auto flex-grow bg-teal-50 dark:bg-gray-700'>
            <Outlet/>
           </div>
           <Footer />
        </div>
    );
};

export default MainLayout;