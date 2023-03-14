import PropTypes from 'prop-types';

const Button = ({ type = 'submit', children }) => {
  return <button type={type}>{children}</button>;
};

export default Button;
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};
