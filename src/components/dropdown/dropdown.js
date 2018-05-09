import './dropdown.less';
import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ errorMsg, options, onChange }) => (
  <div className="dropdown-container">
    <select
      name="newsletter"
      id="newsletter"
      className="dropdown"
      form="signup"
      defaultValue=""
      onChange={onChange}
      required
      aria-label="newsletter type"
      aria-describedby="dropdown-error-msg"
    >

      <option
        key="default"
        value=""
        form="signup"
        disabled
        hidden
      >
        Interested in...
      </option>

      {options.map((option, id) => <option
        key={id}
        form="signup"
        value={id}>
        {option}
      </option>)}

    </select>

    {errorMsg && <label id="dropdown-error-msg" className="dropdown-error" htmlFor="newsletter" form="signup">{errorMsg}</label>}
  </div>
);
DropDown.propTypes = {
  errorMsg: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
};

export default DropDown;
