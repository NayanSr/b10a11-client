import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ArtifactsDetails = () => {
    const data= useLoaderData();
    console.log(data);
    return (
        <div>
            <img src={data.photo} alt="" />
        </div>
    );
};

export default ArtifactsDetails;