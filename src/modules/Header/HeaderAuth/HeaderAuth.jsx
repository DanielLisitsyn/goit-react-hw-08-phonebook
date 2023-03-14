import { NavLink } from 'react-router-dom';

const HeaderAuth = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default HeaderAuth;
