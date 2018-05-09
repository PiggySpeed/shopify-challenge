import './button.less';
import React from 'react';

const Button = ({ children, onClick }) => (
  <input
    className="button"
    type="button"
    value={children}
    onClick={onClick}
  />
);

export default Button;
