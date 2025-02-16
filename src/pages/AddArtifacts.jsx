import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddArtifacts = () => {
  const {user}= useContext(AuthContext);
  const navigate= useNavigate();
  const handleAddArtifacts = (e) => {
    e.preventDefault();
    // name,photo,artifactType,historicalContext,createdAt,discoveredAt,presentLocation
    const form= e.target;
    const name= form.name.value;
    const photo= form.photo.value;
    const artifactType= form.artifactType.value;
    const historicalContext= form.historicalContext.value;
    const createdAt= form.createdAt.value;
    const discoveredAt= form.discoveredAt.value;
    const presentLocation= form.presentLocation.value;
    const addedBy= {name:` ${user?.displayName}`, email:` ${user?.email} `};
    const addedPersonEmail= `${user?.email}`
    const data= {name, photo, artifactType, historicalContext, createdAt, discoveredAt, presentLocation,addedBy,addedPersonEmail,like:0};
    // console.log(data);

    // !POST operation
    fetch('https://b10a11-server.vercel.app/allArtifacts',{
      method:'POST',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: "Added Artifact Successfully",
          icon: "success",
          draggable: true
        });
      }
      navigate('/')
      // console.log(data)
    })
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center my-14  w-1/2 mx-auto">
      <div className="w-full max-w-sm  shadow-sm rounded-lg ">
        {/*//! edit here  */}
        <h1 className="text-2xl font-bold text-center mb-6">Add a new Artifact (req-9)</h1>

        <form onSubmit={handleAddArtifacts}>
            {/* //! Artifact Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Artifact Name
            </label>
            <input
              type="text"
              name="name"
              className="select-accent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Artifact Name"
              required
            />
          </div>


            {/* //! Artifact Image */}
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Artifact Image URL
            </label>
            <input
              type="url"
              name="photo"
              className="select-accent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Artifact Image URL"
              required
            />
          </div>


            {/* //! Artifact type (dropdown option) */}
          <div className="mb-4">
            <label
              htmlFor="artifactType"
              className="block text-sm font-medium text-gray-700"
            >
              Artifact Type
            </label>
            <select name="artifactType" className="select select-accent w-full ">
              {/* <option disabled selected>Dark mode or light mode?</option> */}
              <option>Tools</option>
              <option>Weapons</option>
              <option>Documents</option>
              <option>Writings</option>
            </select>
          </div>

            {/* //! Historical Context */}
          <div className="mb-4">
            <label
              htmlFor="historicalContext"
              className="block text-sm font-medium text-gray-700"
            >
              Historical Context
            </label>
            <input
              type="text"
              name="historicalContext"
              className="select-accent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Historical Context"
            />
          </div>

          {/* //! Created At */}
          <div className="mb-4">
            <label
              htmlFor="createdAt"
              className="block text-sm font-medium text-gray-700"
            >
              Created At
            </label>
            <input
              type="text"
              name="createdAt"
              className="select-accent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Created At"
            />
          </div>

          {/* //! Discovered At */}
          <div className="mb-4">
            <label
              htmlFor="discoveredAt"
              className="block text-sm font-medium text-gray-700"
            >
              Discovered At
            </label>
            <input
              type="text"
              name="discoveredAt"
              className="select-accent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Discovered At"
            />
          </div>

          {/* //! Present Location */}
          <div className="mb-4">
            <label
              htmlFor="presentLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Present Location
            </label>
            <input
              type="text"
              name="presentLocation"
              className="select-accent w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Present Location"
            />
          </div>

          {/* //! Artifact adder name and email */}
          <div className="mb-4">
            <label
              htmlFor="artifactAdder"
              className="block text-sm font-medium text-gray-700"
            >
              Artifact adder name and email
            </label>

            <input
              type="text"
              name="artifactAdder"
              className="select-accent text-gray-500 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              // placeholder="will be default value from loggedin user"
              defaultValue={`Name: ${user.displayName}, Email: ${user.email}`}
              readOnly
              
            />
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Artifact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtifacts;
