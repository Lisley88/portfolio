import { NavLink } from 'react-router-dom';
import '../Header/Header.scss';

function Header() {
    return (
        <nav className='navbar'>
             <div className='navbar__menus'>
                  <NavLink className='navbar__menu' to='/home'>Home</NavLink>
                  <NavLink className='navbar__menu' to='/skills'>Skills</NavLink>
                  <NavLink className='navbar__menu' to='/:id'>Projects</NavLink>
                  <NavLink className='navbar__menu' to='/contact'>Contact</NavLink>
             </div>
        </nav>
    )
}

export default Header