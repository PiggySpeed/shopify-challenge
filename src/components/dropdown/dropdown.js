import './dropdown.less';
import React from 'react';

const DropDown = ({ errorMsg, options, onChange }) => (
  <div className="dropdown-container">
    <select
      name="newsletter"
      className="dropdown"
      form="signup"
      defaultValue=""
      onChange={onChange}
      required
    >

      <option
        key="default"
        className="dropdown-option-placeholder"
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
        className="dropdown-option"
        value={id}>
        {option}
      </option>)}

    </select>

    {errorMsg && <label className="dropdown-error" form="signup">{errorMsg}</label>}
  </div>
);

export default DropDown;
