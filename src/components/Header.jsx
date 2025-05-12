import React, { useContext } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
const {user}= useContext(AuthContext);
    return (
        <div className='mb-4 '>
            <div className=' bg-purple-200 dark:bg-purple-800 dark:text-white'>

           <Navbar/>
            </div>
           
           <div className='max-w-[1400px] mx-auto'>

            <Slider />
           </div>
           
        </div>
    );
};

export default Header;