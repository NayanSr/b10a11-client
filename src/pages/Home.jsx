import React from 'react';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <h3 className='text-2xl mt-2 text-center'>Home PagE. <span className='bg-yellow-300'><span className='bg-red-700 text-white rounded-full px-2 mr-2'>7. </span>This section will show a maximum of 6 Artifacts with
            the highest like count.</span></h3>
        </div>
    );
};

export default Home;