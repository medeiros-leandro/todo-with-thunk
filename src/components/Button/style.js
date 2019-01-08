import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  padding: 7px;
  margin-right: 5px;
  color: #fff;
  cursor: pointer;

  &.-large {
    padding: 10px;
    font-size: 19px;
  }

  &.-add {
    background-color: #3f9be0;
    margin: 0;
  }

  &.-done {
    background-color: #666;
  }

  &.-success {
    background-color: #1cb702;
  }

  &.-remove {
    background-color: #f00;
  }
`;

export default ButtonStyled;
