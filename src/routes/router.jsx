import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router= createBrowserRouter([
    {path:'/', element:<MainLayout/>,
        children:[
            {path:'/', element:<Home/>},
            {path:'allArtifacts', element:<AllArtifacts/>},
            {path:'addArtifacts', element:<AddArtifacts/>},
            {path:'login', element:<Login/>},
            {path:'register', element:<Register/>},
        ]
    }
])


export default router;