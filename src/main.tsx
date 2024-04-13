import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import "./index.css";
import Crew from "./pages/Crew.tsx";
import Destination from "./pages/Destination.tsx";
import Home from "./pages/Home.tsx";
import Technology from "./pages/Technology.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/destination",
          element: <Destination />,
        },
        {
          path: "/crew",
          element: <Crew />,
        },
        {
          path: "/technology",
          element: <Technology />,
        },
      ],
    },
  ],
  { basename: "/space-tourism-website/" }
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
