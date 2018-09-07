import * as React from 'react';

import { Text, TextBox } from '@organizations/ui';

import ITodoListItem from '../interfaces/ITodoListItem';
import TodoListView from './components/TodoListView';

enum ScreenType {
  Active,
  Completed,
}

interface IPropsStore {
  fetchTodo: () => void;
  updateTodo: (id) => void;
  addTodo: (text) => void;
  todos: ITodoListItem[];
  activeTodos: ITodoListItem[];
  completedTodos: ITodoListItem[];
}

export class TodoContainer extends React.Component<IPropsStore, {}> {
  state = {
    activeScreen: ScreenType.Active,
  };

  componentDidMount() {
    const { fetchTodo } = this.props;

    fetchTodo();
  }

  setActiveScreen(type) {
    this.setState({ activeScreen: type });
  }

  onChangeComplete = (id) => {
    const { updateTodo } = this.props;

    updateTodo(id);
  };

  onSubmitNewTodo = (text) => {
    const { addTodo } = this.props;

    addTodo(text);
  };

  render() {
    const { activeTodos, completedTodos } = this.props;
    const { activeScreen } = this.state;

    return (
      <div className="container td-container">
        <TextBox onSubmit={this.onSubmitNewTodo} />
        <Text />
        <div>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className={
                  activeScreen === ScreenType.Active
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                onClick={this.setActiveScreen.bind(this, ScreenType.Active)}
                id="nav-active-tab"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-controls="nav-active"
                aria-selected="true"
              >
                Active
              </a>
              <a
                className={
                  activeScreen === ScreenType.Completed
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                onClick={this.setActiveScreen.bind(this, ScreenType.Completed)}
                id="nav-completed-tab"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-controls="nav-completed"
                aria-selected="false"
              >
                Completed
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className={
                activeScreen === ScreenType.Active
                  ? 'tab-pane fade show active'
                  : 'tab-pane fade'
              }
              id="nav-active"
              role="tabpanel"
              aria-labelledby="nav-active-tab"
            >
              <TodoListView
                key="active_list"
                todos={activeTodos}
                onChange={this.onChangeComplete}
              />
            </div>
            <div
              className={
                activeScreen === ScreenType.Completed
                  ? 'tab-pane fade show active'
                  : 'tab-pane fade'
              }
              id="nav-completed"
              role="tabpanel"
              aria-labelledby="nav-completed-tab"
            >
              <TodoListView
                key="complete_list"
                todos={completedTodos}
                onChange={this.onChangeComplete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { addTodo, fetchTodo, updateTodo } from '../actions/todo';

const mapStateToProps = ({ todo }) => ({ ...todo });

const mapDispatchToProps = (dispatch) => ({
  fetchTodo: () => dispatch(fetchTodo()),
  updateTodo: (e) => dispatch(updateTodo(e)),
  addTodo: (e) => dispatch(addTodo(e)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
