import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtifactsDetails from "../components/ArtifactsDetails";


const router= createBrowserRouter([
    {path:'/', element:<MainLayout/>,
        children:[
            {path:'/', element:<Home/>, 
                loader:()=>fetch('http://localhost:5000/top-six')},
            {path:'allArtifacts', element:<AllArtifacts/>, 
                loader:()=>fetch('http://localhost:5000/allArtifacts')},
            {path:'/:id', element:<ArtifactsDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/allArtifacts/${params.id}`)
            },
            {path:'addArtifacts', element:<AddArtifacts/>},
            {path:'login', element:<Login/>},
            {path:'register', element:<Register/>},
        ]
    }
])


export default router;