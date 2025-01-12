import React from 'react';
import { Link } from 'react-router-dom';

const NoData = () => {
    return (
        <div className=" mx-12 flex flex-col items-center justify-center h-64 bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75h4.5m-2.25 9.75a9.75 9.75 0 100-19.5 9.75 9.75 0 000 19.5zm0 0v-4.5"
          />
        </svg>
        <p className="text-lg text-gray-500 font-medium">No Artifact Available</p>
        <p className="text-base text-gray-400 mt-2">
          Please <Link className="text-blue-600 text-xl" to='/addArtifacts'>add</Link> some data or 
           <button className="text-blue-600 text-xl ml-1" onClick={()=>(window.location.reload())} >Refresh</button> the page.
        </p>
      </div>
    );
};

export default NoData;