import React from "react";
import PropTypes from "prop-types";

import ButtonStyled from "./style";

function Button({ className, children, onClick }) {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
