import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Recipes from "../Layouts/Recipes";
import AllRecipes from "../Pages/AllRecipes/AllRecipes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
    {
        path: "/recipes",
        element: <Recipes></Recipes>,
        children: [
            {
                path: ":id",
                element: <AllRecipes></AllRecipes>
            }
        ]
    }
  ]);

  export default router;