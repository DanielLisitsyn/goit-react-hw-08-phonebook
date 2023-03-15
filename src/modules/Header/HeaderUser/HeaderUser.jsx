import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import css from './HeaderUser.module.css';

const HeaderUser = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {name},{' '}
      <button className={css.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default HeaderUser;
