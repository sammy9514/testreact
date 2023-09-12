import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Block/Layout";
import { Homescreen } from "../Pages/Homescreen";
import Upload from "../Pages/Upload";
export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
  {
    path: "/uploads",
    element: <Upload />,
  },
]);
