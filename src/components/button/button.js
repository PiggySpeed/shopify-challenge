import './button.less';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ errorMsg, children, disabled, onClick }) => (
  <div className="button-container">
    <input
      id="submit"
      className={`button ${disabled ? "button-stripes" : ""}`}
      type="button"
      form="signup"
      value={children}
      onClick={onClick}
      aria-label="submit"
      aria-describedby="button-error-msg"
      disabled={disabled}
    />
    {errorMsg && <label id="button-error-msg" className="button-error" form="signup">{errorMsg}</label>}
  </div>
);
Button.propTypes = {
  errorMsg: PropTypes.string,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
