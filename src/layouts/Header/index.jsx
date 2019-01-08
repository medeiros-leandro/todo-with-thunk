import React from "react";
import HeaderStyled from "./style";

class Header extends React.Component {
  render() {
    return (
      <HeaderStyled>
        <h1>Quantidade de tasks: 0</h1>
      </HeaderStyled>
    );
  }
}

export default Header;
