import ImageOne from "../assets/foto1.jpg";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default Layout;
