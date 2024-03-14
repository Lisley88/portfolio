import '../Header/Header.scss';
import { Link } from 'react-router-dom';


function Header() {
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    return (
        <nav className='navbar'>
             <div className='navbar__menus'>
                  <Link className='navbar__menu' to="/portfolio">Home</Link>
                  <Link className='navbar__menu' onClick={() => {skills?.scrollIntoView({behavior: "smooth",});}} >Skills</Link>
                  <Link className='navbar__menu' onClick={() => {projects?.scrollIntoView({behavior: "smooth",});}} >Projects</Link>
                  <Link className='navbar__menu' onClick={() => {contact?.scrollIntoView({behavior: "smooth",});}} >Contact</Link>
             </div>
        </nav>
    )
}

export default Header