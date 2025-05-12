import React, { useContext } from "react";
import Slider from "../components/Slider";
import { Link, useLoaderData } from "react-router-dom";
import ArtifactsCart from "../components/ArtifactsCart";
import NoData from "../components/NoData";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const topSixData = useLoaderData();
  const {user}= useContext(AuthContext);
  // console.log(user);
  return (
    <div className="">
      
      {/* <Slider /> */}

      {topSixData.length ? (
        <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {" "}
          {topSixData.map((sd) => (
            <ArtifactsCart artifact={sd} key={sd._id}></ArtifactsCart>
          ))}
         
        </div>
      ) : (
        <NoData />
      )}

    <div className="text-center text-lg font-semibold mt-8 mb-4"><Link to='/allArtifacts' className="bg-emerald-600 border-2 border-green-800 px-4 py-1 rounded-md ">Show all Artifacts</Link></div>
    </div>
  );
};

export default Home;
