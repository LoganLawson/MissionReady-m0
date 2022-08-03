import { useState } from "react";
import "../styles/Navbar.css";
import logo from'../images/logo.png';

export default function Navbar(props) {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
    function handleNavExtend() {
        setIsNavbarExpanded(!isNavbarExpanded)
        props.extendNav(!isNavbarExpanded)
    }
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' style={{width: '4vh', height: '4vh', marginLeft: '2vw', '&:hover': {background: '#A3B4BF'}}} />
            <a className='company-name'>
                Peak
            </a>
            <button
                className='hamburger'
                onClick={handleNavExtend}
            >
                <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            <div
                className={
                    isNavbarExpanded ? "navigation-menu expanded" : "navigation-menu"
                  }
            >
                <ul>
                <li><a href="/Menu1">Menu 1</a></li>
                <li><a href="/Menu2">Menu 2</a></li>
                <li><a href="/Menu3">Menu 3</a></li>
                <li><a href="/login" className='navigation-menu-login'>Login</a></li> 
                </ul>
            </div>
        </nav>
    );
}