import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Layouts/Recipes";
import AllRecipes from "../Pages/AllRecipes/AllRecipes";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../Pages/Register/Register";
import RegisterLayout from "../Layouts/RegisterLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <AllRecipes></AllRecipes>,
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
  }
]);

export default router;