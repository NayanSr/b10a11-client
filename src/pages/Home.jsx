import React, { useContext } from "react";
import Slider from "../components/Slider";
import { Link, useLoaderData } from "react-router-dom";
import ArtifactsCart from "../components/ArtifactsCart";
import NoData from "../components/NoData";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const topSixData = useLoaderData();
  const {user}= useContext(AuthContext);
  console.log(user);
  return (
    <div className="">
      <Slider />

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

      
    </div>
  );
};

export default Home;
