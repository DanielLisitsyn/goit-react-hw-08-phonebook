import PropTypes from 'prop-types';
import css from './TextField.module.css';

const TextField = ({ label, ...props }) => {
  return (
    <div>
      <label className={css.label}>{label}</label>
      <input className={css.input} {...props} />
    </div>
  );
};

export default TextField;
TextField.propTypes = {
  label: PropTypes.string,
  props: PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
  }),
};
