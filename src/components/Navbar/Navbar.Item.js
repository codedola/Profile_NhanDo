import React from "react";
import { Link } from "react-router-dom";

export default function NavbarItem({ name, path = "/", closeMobileMenu }) {
    return (
        <li className='nav-item'>
            <Link to={path} className='nav-links' onClick={closeMobileMenu}>
                {name}
            </Link>
        </li>
    );
}
