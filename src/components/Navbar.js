import { useState } from "react";
import "../styles/Navbar.css";
import logo from'../logo192.png';

export default function Navbar() {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' style={{width: '20px', height: '20px', marginLeft: '1rem'}} />
            <a className='company-name'>
                 My company
            </a>
            <button
                className='hamburger'
                onClick={() => {setIsNavbarExpanded(!isNavbarExpanded)}}
            >
                <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="black"
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