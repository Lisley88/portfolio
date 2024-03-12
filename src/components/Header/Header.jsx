import { NavLink } from 'react-router-dom';
import '../Header/Header.scss';
import logo from '../../assets/logo_ls.jpg';


function Header() {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' />
             <div className='navbar__menus'>
                  <NavLink className='navbar__menu' to='/'>Home</NavLink>
                  <NavLink className='navbar__menu' to='/skills'>Skills</NavLink>
                  <NavLink className='navbar__menu' to='/:id'>Projects</NavLink>
                  <NavLink className='navbar__menu' to='/contact'>Contact</NavLink>
             </div>
        </nav>
    )
}

export default Header