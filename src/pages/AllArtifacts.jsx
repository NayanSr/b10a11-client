import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ArtifactsCart from '../components/ArtifactsCart';

const AllArtifacts = () => {
    const allArtifacts= useLoaderData();

    return (
        <div>
            This is {allArtifacts.length} Artifacts........
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    allArtifacts.map(sa=><ArtifactsCart key={sa._id} artifact={sa}></ArtifactsCart>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;