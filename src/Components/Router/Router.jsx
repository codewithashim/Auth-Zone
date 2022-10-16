import Layout from "../../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Login from "../Login/Login";
import Register from "../Register/Register";
const { createBrowserRouter } = require("react-router-dom");

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default route;
