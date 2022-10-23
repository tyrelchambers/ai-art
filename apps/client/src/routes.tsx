import Index from "./pages/Index";
import React from "react";
import Upload from "./pages/Upload";
import { Route } from "react-location";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PublicGallery from "./pages/PublicGallery";
import Gallery from "./pages/user/Gallery";
import Collections from "./pages/user/Collections";
import Image from "./pages/Image";

export const routes: Route[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/upload",
    element: <Upload />,
    children: [
      {
        path: ":id",
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "gallery",
    element: <PublicGallery />,
  },
  {
    path: "/user",
  },
  {
    path: "/image/:uuid",
    element: <Image />,
  },
  {
    path: ":uuid",
    children: [
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
    ],
  },
];
