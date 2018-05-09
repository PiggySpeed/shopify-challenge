import './validatedinput.less';
import React from 'react';

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

export default ValidatedInput;
