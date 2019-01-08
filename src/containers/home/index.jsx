import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HomeStyled from "./style";
import classnames from "classnames";

import * as Actions from "../../store/todo/actions";

/**
 * @description Import all components
 */
import Button from "../../components/Button";
import Input from "../../components/Input";
import { dispatch } from "rxjs/internal/observable/pairs";

class Home extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      description: "",
      list: []
    };
  }

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      description: value
    });
  };

  toggleStatusFinish = id => {
    const { list } = this.state;

    const items = list.map((item, key) => {
      if (item.id === id) {
        list[key].finished = !list[key].finished;
      }

      return item;
    });

    this.setState({
      list: items
    });
  };

  removeItem = id => {
    const { list } = this.state;

    this.setState({
      list: list.filter(item => item.id !== id)
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { description } = this.state;
    const { addTodo } = this.props;

    const item = { id: Math.random(), description };

    addTodo(item);

    this.setState({
      description: ""
    });
  };

  render() {
    const { list, description } = this.state;

    return (
      <HomeStyled>
        <h2>Lista de todos</h2>

        <form onSubmit={this.handleSubmit} className="form-todo">
          <Input
            onChange={this.handleChange}
            type="text"
            className="-large"
            value={description}
          />
          <Button className="btn -add -large">+</Button>
        </form>
        <div className="wrap">
          {list.map(item => (
            <div
              className={classnames({ item: true, "-done": item.finished })}
              key={Math.random()}
            >
              <p className="description">{item.description}</p>

              <div className="actions">
                <Button
                  onClick={() => {
                    this.toggleStatusFinish(item.id);
                  }}
                  className={classnames({
                    btn: true,
                    "-done": item.finished,
                    "-success": !item.finished
                  })}
                >
                  {item.finished ? "desfazer" : "concluir"}
                </Button>
                <Button
                  onClick={() => {
                    this.removeItem(item.id);
                  }}
                  className="btn -remove"
                >
                  remover
                </Button>
              </div>
            </div>
          ))}
        </div>
      </HomeStyled>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
