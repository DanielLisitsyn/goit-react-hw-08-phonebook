import TextField from '../../shared/TextField/TextField';
import Button from '../../shared/Button/Button';
import PropTypes from 'prop-types';

import useForm from '../../shared/useForm';

import initialState from './initialState';
import fields from './fields';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
