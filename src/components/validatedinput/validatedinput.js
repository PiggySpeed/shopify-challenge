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
    />
    {errorMsg && <label className="validated-input-error" form="signup">{errorMsg}</label>}
  </div>
);
ValidatedInput.propTypes = {
  errorMsg: PropTypes.string,
  onBlur: PropTypes.func
};

export default ValidatedInput;
