import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaCodeBranch } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import MENU_ITEMS from "../../constant/menu.items";
import NavMenuItem from "./Navbar.Item";
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link
                            to='/'
                            className='navbar-logo'
                            onClick={closeMobileMenu}
                        >
                            <FaCodeBranch className='navbar-icon' />
                            NhanDo
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {MENU_ITEMS?.map(function (item) {
                                return (
                                    <NavMenuItem
                                        {...item}
                                        closeMobileMenu={closeMobileMenu}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
