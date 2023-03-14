import { useSelector } from 'react-redux';

import HeaderAuth from './HeaderAuth/HeaderAuth';
import HeaderUser from './HeaderUser/HeaderUser';

import { isUserLogin } from '../../redux/auth/auth-selectors';

const Header = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      {!isLogin && <HeaderAuth />}
      {isLogin && <HeaderUser />}
    </div>
  );
};

export default Header;
