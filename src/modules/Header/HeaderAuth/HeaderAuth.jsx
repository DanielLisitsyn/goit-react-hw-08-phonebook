import { NavLink } from 'react-router-dom';
import css from './HeaderAuth.module.css';

const HeaderAuth = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.navLink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.navLink} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default HeaderAuth;
