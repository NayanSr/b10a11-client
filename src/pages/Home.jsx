import React from 'react';
import Slider from '../components/Slider';
import { useLoaderData } from 'react-router-dom';
import ArtifactsCart from '../components/ArtifactsCart';

const Home = () => {
    const topSixData= useLoaderData();
    return (
        <div className=''>
            <Slider/>
            <div className='mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

            {
                topSixData.map(sd=><ArtifactsCart artifact={sd}></ArtifactsCart>)
            }
            </div>
        </div>
    );
};

export default Home;