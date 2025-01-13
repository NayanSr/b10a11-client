import React, { useContext } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
const {user}= useContext(AuthContext);
    return (
        <div>
           <Navbar/>
           {/* <Slider/> */}
           <br />
           <h2>Name: {user?.displayName}</h2>
           <br />
        </div>
    );
};

export default Header;