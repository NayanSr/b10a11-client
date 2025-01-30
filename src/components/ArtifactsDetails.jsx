import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import likeThumb from "../assets/like.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ArtifactsDetails = () => {
  const data = useLoaderData();
  const {
    _id,
    name,
    photo,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    presentLocation,
    addedBy,
    like,
  } = data;
  const[isExist,setIsExist]=useState();
  const { user } = useContext(AuthContext);
  
  const [newCount, setNewCount] = useState(like);
  // const [likedArtifacts, setLikedArtifacts] = useState([]);

  useEffect(() => {
    fetch("https://b10a11-server.vercel.app/all-liked")
      .then((res) => res.json())
      .then(async (data) => {
        // setLikedArtifacts(data);
        // console.log(user);
        // console.log(data);
        const checkId= data.filter((sd) => sd.artifactsId == _id);
        // console.log(checkId);
        // const check= await checkId?.email == user?.email
        const check= await checkId?.find(sd=>sd.email == user?.email)
        setIsExist(check);

        // console.log(isExist, 'check: ',check);
      });
  }, [user?.email, newCount,_id]);

  const handleIncreaseLike = () => {
    //! post in a new collection with _id & user email
    const dataToServer = {
      artifactsId: _id,
      name,
      photo,
      email: `${user.email}`,
    };
    fetch("https://b10a11-server.vercel.app/all-liked", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dataToServer),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
           Swal.fire({
                    title: "Thanks for liking the artifact",
                    icon: "success",
                    draggable: true,
                  });
        }
      });

    //! patch current artifact like count
    fetch(`https://b10a11-server.vercel.app/allArtifacts/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setNewCount(newCount + 1);
        // TODO: load all liked and find(login user.email with loaded data). Use turnary operation in like button toggle
        // console.log(data);
      });
  };

  return (
    <div className="artifact-details w-3/4 mx-auto mt-8 p-6 bg-gray-100 shadow-lg rounded-2xl">
      {/* Image */}
      <img
        className="mx-auto rounded-lg w-full max-w-2xl mb-6"
        src={photo}
        alt={name}
      />

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        {name}
      </h2>

      {/* Artifact Details */}
      <div className="text-lg text-gray-700 space-y-3">
        <p>
          <strong>Artifact Type:</strong> {artifactType}
        </p>
        <p>
          <strong>Created At:</strong> {createdAt}
        </p>
        <p>
          <strong>Discovered At:</strong> {discoveredAt}
        </p>
        <p>
          <strong>Present Location:</strong> {presentLocation}
        </p>
      </div>

      {/* Added By */}
      <div className="mt-6 bg-gray-200 p-4 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Added By:</h3>
        <p>
          <strong>Name:</strong> {addedBy.name}
        </p>
        <p>
          <strong>Email:</strong> {addedBy.email}
        </p>
      </div>

      {/* Historical Context */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Historical Context:
        </h3>
        <p className="text-gray-700 text-justify leading-relaxed indent-6">
          {historicalContext}
        </p>
      </div>
      <section className="bg-blue-700 flex justify-center items-center py-1 mt-2 rounded-lg">
        <p className="bg-gray-300 px-6 py-1 my-1 rounded-md">
          Liked: {newCount}
        </p>

        {!isExist ? (
          <button
            onClick={handleIncreaseLike}
            className=" flex items-center ml-16 bg-gray-300 px-6 py-1 my-1 rounded-sm"
          >
            Like <img className="ml-4 w-6 h-6" src={likeThumb} alt="" />
          </button>
        ) : (
          <p
            
            className=" flex items-center ml-16 bg-orange-600 text-white px-6 py-1 my-1 rounded-md"
          >
            Thanks for your like
          </p>
        )}
      </section>
    </div>
  );
};

export default ArtifactsDetails;
