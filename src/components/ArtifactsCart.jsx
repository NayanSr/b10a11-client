import React from 'react';
import { Link } from 'react-router-dom';

const ArtifactsCart = ({artifact}) => {
    const {name,photo,artifactType,_id,like} = artifact;
    return (
        <div className='border-2 border-green-600 p-3 rounded-lg flex flex-col justify-between'>
            <img className=' rounded-2xl w-3/4 mx-auto' src={photo}  alt={name} />
           <div className='mx-4'>
           <h2 className='text-lg font-semibold'>Artifact Name: {name}</h2>
           <h4 className='font-semibold'>Type: {artifactType}</h4>
           <h4 className='font-semibold'>Liked: {like}</h4>
           <Link to={`../${_id}`}>

           <button className='btn btn-sm btn-success font-bold w-full mt-2 hover:bg-blue-500 hover:text-white'>Details</button>
           </Link>
           </div>
            
        </div>
    );
};

export default ArtifactsCart;