import Header from "../components/commons/Header"
import Navbar from "../components/commons/Navbar"
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout;