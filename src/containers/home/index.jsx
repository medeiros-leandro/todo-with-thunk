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

class Home extends React.Component {
  handleChange = e => {
    const { value } = e.target;
    const { updateDescription } = this.props;

    updateDescription(value);
  };

  toggleStatusFinish = id => {
    const { toggleStatusFinish } = this.props;

    toggleStatusFinish(id);
  };

  removeItem = id => {
    const { removeTodo } = this.props;
    removeTodo(id);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addTodo, description } = this.props;

    const item = { id: Math.random(), description, finished: false };

    addTodo(item);
  };

  render() {
    const { list, description } = this.props;

    return (
      <HomeStyled>
        <h2>Lista de todos</h2>

        <form onSubmit={this.handleSubmit} className="form-todo">
          <Input
            onChange={this.handleChange}
            type="text"
            className="-large"
            value={description && description}
          />
          <Button className="btn -add -large">+</Button>
        </form>
        <div className="wrap">
          {list &&
            list.map(item => (
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

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
