import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ type = 'submit', children }) => {
  return (
    <button className={css.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};
