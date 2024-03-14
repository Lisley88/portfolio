import '../Header/Header.scss';
import { NavLink } from 'react-router-dom';


function Header() {
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    return (
        <nav className='navbar'>
             <div className='navbar__menus'>
                  <NavLink className='navbar__menu' to="/">Home</NavLink>
                  <NavLink className='navbar__menu' onClick={() => {skills?.scrollIntoView({behavior: "smooth",});}} >Skills</NavLink>
                  <NavLink className='navbar__menu' onClick={() => {projects?.scrollIntoView({behavior: "smooth",});}} >Projects</NavLink>
                  <NavLink className='navbar__menu' onClick={() => {contact?.scrollIntoView({behavior: "smooth",});}} >Contact</NavLink>
             </div>
        </nav>
    )
}

export default Header