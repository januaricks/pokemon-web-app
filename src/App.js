import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Homepage } from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <RouterProvider router={router}>
      <Homepage />
    </RouterProvider>
  );
}

export default App;
