import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';

function Layout() {

    const outletStyle = {
        textAlign: 'center',
        marginTop: '70px'
    }

    return(
        <>
        <Header/>
        <Navbar/>
        <div style={outletStyle}>
        <Outlet/>
        </div>
        </>
    )
}
export default Layout;