import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedData, setLikedData]= useState([])
  // console.log(user);

  useEffect(() => {
    fetch(`https://b10a11-server.vercel.app/my-liked?email=${user.email}`)
      .then((req) => req.json())
      .then((data) => {
        setLikedData(data)
        // console.log(data);
      });
  }, [user?.email]);

  return <div>
    All my liked artifacts: {likedData.length}


    {likedData.length? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {
        likedData.map(sd=><div key={sd._id} className="border-2 mx-auto px-4 py-2 rounded-2xl">
          <img src={sd.photo} alt="" className="rounded-lg" />
          <h2>Name: {sd.name}</h2>
        </div>)
      }
    </div>: <p className="text-xl font-semibold">You have not liked any artifacts yet.</p>}



    
    </div>;
};

export default LikedArtifacts;
