import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Layouts/Recipes";
import AllRecipes from "../Pages/AllRecipes/AllRecipes";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";

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
                loader: ({params}) => fetch(`https://food-lover-xi.vercel.app/chefs/${params.id}`)
            }
        ]
    },
    {
      path: "/login",
      element: <LoginLayout></LoginLayout>
    }
  ]);

  export default router;