import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;