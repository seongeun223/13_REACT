import { NavLink,Link } from 'react-router-dom'


function Navbar() {

    const activeStyle = {
        backgroundColor: 'powderblue'
    }

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#F5A9BC',
        alignItems: 'center',  
        padding: '10px',
        borderRadius: '40px',             
        gap: '10px',
        width: '600px',               
        height: '20px',
        margin: '0 auto',
        marginTop: '30px'
        
    };


    const ulStyle = {
        display: 'flex',               
        listStyleType: 'none',           
        padding: 0,                      
        margin: 0,  
        gap: '100px'                     
    };


    return (
        <div style={navbarStyle}>
            <ul style={ulStyle}>
                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => isActive? activeStyle: undefined}>소개</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive? activeStyle: undefined}>메뉴목록</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar;