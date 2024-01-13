import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            TV-Shows
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
