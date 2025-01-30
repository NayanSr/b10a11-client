import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

const Register = () => {
  const {emailPasswordRegistration}= useContext(AuthContext);
  const navigate= useNavigate();

    const handleRegisterSubmit=e=>{
      e.preventDefault();
      const form= e.target;
      const name= form.name.value;
      const photo= form.photo.value;
      const email= form.email.value;
      const password= form.password.value;
      const regex =(/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/).test(password);
      if(regex){
        emailPasswordRegistration(email,password)
        .then(data=>{
          updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
          })
          Swal.fire({
                       position: "top-end",
                       icon: "success",
                       title: "Registration successful!",
                       showConfirmButton: false,
                       timer: 1500
                     });
          // console.log(data.user);
        })
        navigate('/')
        return;
      }
      else{
        Swal.fire({
          title: "Error",
          text: "Password should be at least 6 characters long with one uppercase and one lowercase letter.",
          icon: "error",
          confirmButtonText: "OK",
          draggable: true,
        });

        return;
      }
    }





    return (
        <div className="min-h-screen flex items-center justify-center py-4 ">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        <form onSubmit={handleRegisterSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your photo URL"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Register;