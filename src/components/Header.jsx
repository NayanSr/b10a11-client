import React, { useContext } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
const {user}= useContext(AuthContext);
    return (
        <div className='mb-4'>
           <Navbar/>
           
            <Slider />
           
        </div>
    );
};

export default Header;