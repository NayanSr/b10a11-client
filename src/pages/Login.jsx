import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from '../assets/googleIcon.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const navigate= useNavigate();
  const location= useLocation();
  const from= location.state || '/';
  const {googleLogin,emailPasswordLogin}= useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        const form= e.target;
        const email=form.email.value;
        const password= form.password.value;
        emailPasswordLogin(email, password)
        .then(data=>{
          console.log(data.user);
          navigate(from)
        })
        
        
        //TODO: After successful login use a sweet alert to show success 
    }

    

    const handleGoogleLogin=()=>{
          googleLogin()
          .then(data=>{
            console.log(data.user);
            navigate(from)
          })
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
  
          <form onSubmit={handleLogin}>
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
              Login
            </button>
          </form>
          <div className="text-center bg-teal-200 rounded-lg mt-4 flex justify-evenly px-12 hover:bg-teal-400">
            <img className="w-8 h-8" src={googleIcon} alt="" />
            <button onClick={handleGoogleLogin} className="py-1 text-lg text-purple-800 font-semibold">Google Signin</button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;