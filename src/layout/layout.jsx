import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex items-center justify-center flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
