import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../components/Homepage";
import { Pokemons } from "../components/Pokemons";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pokemons",
    element: <Pokemons />,
  },
]);
