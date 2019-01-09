import React from "react";
import { connect } from "react-redux";
import HeaderStyled from "./style";

class Header extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <HeaderStyled>
        <h1>Quantidade de tasks: {list.length}</h1>
      </HeaderStyled>
    );
  }
}

const mapStateToProps = state => state.todo;

export default connect(mapStateToProps)(Header);
