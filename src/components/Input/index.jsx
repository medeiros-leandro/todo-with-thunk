import React from "react";
import PropTypes from "prop-types";

import InputStyled from "./style";

function Input({ type, value, className, onChange }) {
  return (
    <InputStyled
      type={type}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}

Input.defaultProps = {
  onChange: () => {}
};

Input.propTypes = {
  value: PropTypes.any,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Input;
