import PropTypes from 'prop-types';

const TextField = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
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
