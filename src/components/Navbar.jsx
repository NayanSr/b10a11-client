import React, { useContext } from "react";
import "../components/css/nav.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import DarkTheam from "./DarkTheam";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user, user?.photoURL);
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  const navigationLinks = (
    <>
      <NavLink className="text-lg ml-4 px-3 py-1" to="/">
        Home
      </NavLink>
      <NavLink className="text-lg ml-4 px-3 py-1" to="/allArtifacts">
        All Artifacts
      </NavLink>
      <NavLink className="text-lg ml-4 px-3 py-1" to="/addArtifacts">
        Add Artifacts
      </NavLink>
    </>
  );

  return (
    <div className="navbar max-w-[1400px] mx-auto rounded-t-md">


      <div className="  navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navigationLinks}
          </ul>
        </div>
        {/* //! change LOGO */}
        <Link to="/" className="text-lg lg:text-2xl font-bold text-orange-900">
          Legacy Tracker
        </Link>
      </div>
      <div className="navbar-center mr-12 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigationLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <img
            src={user?.photoURL}
            className="w-8 h-8  rounded-lg hidden sm:block mr-2"
            alt="User Image"
            title={user?.displayName}
          />
        ) : (
          ""
        )}

        {!user?.email ? (
          <Link
            to="/login"
            className="btn btn-sm text-sm md:text-lg bg-gray-200 text-orange-500 hover:bg-green-100 mx-1 md:mx-4"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="btn btn-sm text-sm md:text-lg bg-gray-200 text-orange-500 hover:bg-green-100"
          >
            Logout
          </button>
        )}

        <Link
          to="/register"
          className="btn btn-sm text-sm md:text-lg bg-gray-200 text-orange-500 hover:bg-green-100 md:ml-4"
        >
          Register
        </Link>

        <details className="dropdown dropdown-end dropdown-bottom ">
          <summary className="btn btn-sm bg-purple-200 m-1 text-sm md:text-lg hover:bg-purple-600 hover:text-white">
            Profile
          </summary>
          <ul className="menu bg-green-50 dropdown-content  rounded-box z-[1] w-52 p-2 shadow">
            <Link
              to="/my-artifacts"
              className="bg-orange-50 font-semibold p-2 rounded-t-xl hover:bg-yellow-200"
            >
              My Artifacts
            </Link>

            <Link
              to="/my-liked"
              className="bg-orange-50 font-semibold p-2 rounded-b-xl hover:bg-yellow-200"
            >
              Liked Artifacts
            </Link>
          </ul>
        </details>
          <DarkTheam/>
      </div>
      </div>

    
  );
};

export default Navbar;
