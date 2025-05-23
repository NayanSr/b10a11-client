import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ArtifactsCart from '../components/ArtifactsCart';
import NoData from '../components/NoData';

const AllArtifacts = () => {
    const allArtifacts= useLoaderData();

    return (
        <div className='my-4'>
            
<h2 className='text-2xl my-6 ml-4'>Total Artifacts: {allArtifacts.length} </h2>


            {allArtifacts.length ? (
          <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {
              allArtifacts.map(sa=><ArtifactsCart key={sa._id} artifact={sa}></ArtifactsCart>)
          }
      </div>
      ) : (
        <NoData />
      )}





          
        </div>
    );
};

export default AllArtifacts;