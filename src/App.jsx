import About from "./pages/about/about";
import "./App.css";
import Awal from "./pages/home/awal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Awal />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
