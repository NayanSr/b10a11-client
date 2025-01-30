import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtifactsDetails from "../components/ArtifactsDetails";
import MyArtifacts from "../pages/MyArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts";
import UpdateArtifact from "../pages/UpdateArtifact";
import PrivateRoute from "./PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

// const {serverLive}= useContext(AuthContext);
// console.log(serverLive);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://b10a11-server.vercel.app/top-six"),
      },
      {
        path: "allArtifacts",
        element: <AllArtifacts />,
        loader: () => fetch("https://b10a11-server.vercel.app/allArtifacts"),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <ArtifactsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b10a11-server.vercel.app/allArtifacts/${params.id}`),
      },
      {
        path: "my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "my-liked",
        element: (
          <PrivateRoute>
            <LikedArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "addArtifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts />
          </PrivateRoute>
        ),
      },
      { path: `updateArtifact/:id`, element: <UpdateArtifact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
