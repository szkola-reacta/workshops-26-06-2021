// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
