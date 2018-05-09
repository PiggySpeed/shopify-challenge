import './button.less';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ errorMsg, children, onClick }) => (
  <div className="button-container">
    <input
      id="submit"
      className="button"
      type="button"
      form="signup"
      value={children}
      onClick={onClick}
    />
    {errorMsg && <label className="button-error" form="signup">{errorMsg}</label>}
  </div>
);
Button.propTypes = {
  errorMsg: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
