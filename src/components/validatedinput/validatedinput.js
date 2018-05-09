import './validatedinput.less';
import React from 'react';
import PropTypes from 'prop-types';

const ValidatedInput = ({ errorMsg, onBlur }) => (
  <div className="validated-input-container">
    <input
      type="email"
      id="email"
      form="signup"
      placeholder="Email Address"
      className="validated-input-text-box"
      onBlur={onBlur}
      aria-label="email"
      aria-describedby="validated-input-error"
    />
    {errorMsg && <label
      id="validated-input-error"
      className="validated-input-error"
      form="signup"
    >
      {errorMsg}
    </label>}
  </div>
);
ValidatedInput.propTypes = {
  errorMsg: PropTypes.string,
  onBlur: PropTypes.func
};

export default ValidatedInput;
