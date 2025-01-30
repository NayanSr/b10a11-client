import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtifacts = () => {
  const [myArtifacts, setMyArtifacts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://b10a11-server.vercel.app/my-artifacts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyArtifacts(data);
        // console.log(data);
      });
  }, [user?.email]);


  const handleDelete=id=>{




    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


//!start
fetch(`https://b10a11-server.vercel.app/allArtifacts?id=${id}`,{
  method:'DELETE',
  headers:{'content-type':'application/json'}
})
.then(res=>res.json())
.then(data=>{
  if(data.deletedCount){
    const restArtifact= myArtifacts.filter(sa=>sa._id !==id);
    setMyArtifacts(restArtifact);
    // console.log(restArtifact);
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }})


//!end


       
      }
    });




   
   
  }

  return (
    <div>
      All my Added art...........{myArtifacts.length}
      {myArtifacts.length? <div className="">

{myArtifacts.map((sa) => (
  <div
    key={sa._id}
    className="border-2 my-4 flex flex-col sm:flex-row items-center justify-between px-16 py-2 rounded-2xl mx-6"
  >
    <div className="flex items-center gap-6">
      <img
        src={sa.photo}
        alt={sa.name}
        className="w-20 h-20 rounded-lg"
        title={sa.addedPersonEmail}
      />
      <div>
        <h4 className="text-lg font-semibold">{sa.name}</h4>
        <p className="text-base">Artifact Type: {sa.artifactType}</p>
        <p>Total Liked: {sa.like}</p>
      </div>
    </div>

    <div className="flex   sm:flex-col mt-4 sm:mt-0 gap-2 ">
      <Link
        className="bg-green-700 px-4 py-1 rounded-md text-base font-semibold text-white"
        to={`/updateArtifact/${sa._id}`}
      >
        <button>Update</button>
      </Link>

      <button onClick={()=>handleDelete(sa._id)} className="bg-red-600 px-4 py-1 rounded-md text-base font-semibold text-white">
        Delete
      </button>
    </div>
  </div>
))}
</div> :<div className="text-center my-8">
      <p className="text-2xl">You have not liked any artifacts yet.</p>
      <Link to='/addArtifacts' className="text-blue-600 underline text-lg mt-2">Add an Artifact</Link>
      </div>}
    </div>
  );
};

export default MyArtifacts;
