import './button.less';
import React from 'react';

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

export default Button;
