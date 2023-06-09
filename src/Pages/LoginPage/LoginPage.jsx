import { useDispatch } from 'react-redux';

import LoginForm from '../../modules/LoginForm/LoginForm';

import { login } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <h3 className="page-title">Login page</h3>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
