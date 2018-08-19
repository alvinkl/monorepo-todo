import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { TextBox } from "@alvin/ui";
import { ITodoContainerStore } from "./interfaces/ITodoContainerStore";

import TodoListView from "./components/TodoListView";

enum ScreenType {
  Active,
  Completed,
}
interface ITodoContainer {
  store?: ITodoContainerStore;
}

@observer
class TodoContainer extends React.Component<ITodoContainer, {}> {
  @observable
  activeScreen: ScreenType = ScreenType.Active;

  render() {
    return (
      <div className="container td-container">
        <TextBox onSubmit={this.onSubmitNewTodo} />

        <div>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className={
                  this.activeScreen == ScreenType.Active
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => {
                  this.activeScreen = ScreenType.Active;
                }}
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
                  this.activeScreen == ScreenType.Completed
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => {
                  this.activeScreen = ScreenType.Completed;
                }}
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
                this.activeScreen == ScreenType.Active
                  ? "tab-pane fade show active"
                  : "tab-pane fade"
              }
              id="nav-active"
              role="tabpanel"
              aria-labelledby="nav-active-tab"
            >
              <TodoListView
                key="active_list"
                todos={this.props.store ? this.props.store.activeItems : []}
                onChange={this.onChangeComplete}
              />
            </div>
            <div
              className={
                this.activeScreen == ScreenType.Completed
                  ? "tab-pane fade show active"
                  : "tab-pane fade"
              }
              id="nav-completed"
              role="tabpanel"
              aria-labelledby="nav-completed-tab"
            >
              <TodoListView
                key="complete_list"
                todos={this.props.store ? this.props.store.completedItems : []}
                onChange={this.onChangeComplete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  onChangeComplete = todo => {
    todo.setCompleteness(!todo.isCompleted);
  };

  onSubmitNewTodo = (text: string) => {
    console.log(this.props);
    this.props.store.addItem(text);
  };
}

export default TodoContainer;
