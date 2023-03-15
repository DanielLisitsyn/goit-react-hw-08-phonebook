import TextField from '../../shared/TextField/TextField';
import Button from '../../shared/Button/Button';
import PropTypes from 'prop-types';
import useForm from '../../shared/useForm';
import initialState from './initialState';
import fields from './fields';
import css from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Log in</Button>
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
