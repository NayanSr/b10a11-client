import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedData, setLikedData]= useState([])
  // console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/my-liked?email=${user.email}`)
      .then((req) => req.json())
      .then((data) => {
        setLikedData(data)
        console.log(data);
      });
  }, []);

  return <div>
    All my liked artifacts: {likedData.length}
    </div>;
};

export default LikedArtifacts;
