import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Awal from "./pages/home/awal";
import About from "./pages/about/about";
import Portofolio from "./pages/portofolio/portofolio";

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
      {
        path: "/portofolio",
        element: <Portofolio />,
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
