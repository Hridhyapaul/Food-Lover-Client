import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Layouts/Recipes";
import AllRecipes from "../Pages/AllRecipes/AllRecipes";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../Pages/Register/Register";
import RegisterLayout from "../Layouts/RegisterLayout";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import BlogLayout from "../Layouts/BlogLayout";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

    ]
  },
  {
    path: "/recipes",
    element: <Recipes></Recipes>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><AllRecipes></AllRecipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://food-lover-xi.vercel.app/chefs/${params.id}`)
      }
    ]
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: '/register',
    element: <RegisterLayout></RegisterLayout>,
    children: [
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/blog',
    element: <BlogLayout></BlogLayout>,
    children: [
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
]);

export default router;