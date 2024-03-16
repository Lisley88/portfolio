import React, { useEffect } from "react";
import "../Header/Header.scss";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    useEffect(() => {
        const selectedSection = location.hash.substring(1);
        if (location.pathname === "/portfolio/" && location.hash) {
            scrollToSection(selectedSection);
        }
    }, [location]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView();
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar__menus">
                <li className="navbar__menu">
                    <NavLink to="/portfolio/#home">Home</NavLink>
                </li>
                <li className="navbar__menu">
                    <NavLink to="/portfolio/#skills">
                        Skills
                    </NavLink>
                </li>
                <li className="navbar__menu">
                    <NavLink to="/portfolio/#projects">
                        Projects
                    </NavLink>
                </li>
                <li className="navbar__menu">
                    <NavLink to="/portfolio/#contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
