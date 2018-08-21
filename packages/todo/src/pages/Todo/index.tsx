import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { TextBox } from '@alvin/ui';
import { ITodoContainerStore } from './interfaces/ITodoContainerStore';
import { ITodoListItemStore } from './interfaces/ITodoListItemStore';

import TodoListView from './components/TodoListView';

enum ScreenType {
  Active,
  Completed,
  Fetched,
}
interface PropTypes {
  store: ITodoContainerStore;
}

@observer
export class TodoContainer extends React.Component<PropTypes, {}> {
  @observable
  activeScreen: ScreenType = ScreenType.Active;

  @action
  setActiveScreen = (activeScreen: number) => {
    this.activeScreen = activeScreen;
  };

  onChangeComplete = (todo: ITodoListItemStore) => {
    todo.setCompleteness(!todo.isCompleted);
  };

  onSubmitNewTodo = (text: string) => {
    const {
      store: { addItem },
    } = this.props;

    addItem(text);
  };

  render() {
    const {
      store,
      store: { activeItems, completedItems, fetchedItems },
    } = this.props;

    return (
      <div className="container td-container">
        <TextBox onSubmit={this.onSubmitNewTodo} />

        <div>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className={
                  this.activeScreen === ScreenType.Active
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                onClick={() => {
                  this.setActiveScreen(ScreenType.Active);
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
                  this.activeScreen === ScreenType.Completed
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                onClick={() => {
                  this.setActiveScreen(ScreenType.Completed);
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
              <a
                className={
                  this.activeScreen === ScreenType.Completed
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                onClick={() => {
                  this.setActiveScreen(ScreenType.Fetched);
                }}
                id="nav-completed-tab"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-controls="nav-completed"
                aria-selected="false"
              >
                Fetched
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className={
                this.activeScreen === ScreenType.Active
                  ? 'tab-pane fade show active'
                  : 'tab-pane fade'
              }
              id="nav-active"
              role="tabpanel"
              aria-labelledby="nav-active-tab"
            >
              <TodoListView
                key="active_list"
                todos={store ? activeItems : []}
                onChange={this.onChangeComplete}
              />
            </div>
            <div
              className={
                this.activeScreen === ScreenType.Completed
                  ? 'tab-pane fade show active'
                  : 'tab-pane fade'
              }
              id="nav-completed"
              role="tabpanel"
              aria-labelledby="nav-completed-tab"
            >
              <TodoListView
                key="complete_list"
                todos={store ? completedItems : []}
                onChange={this.onChangeComplete}
              />
            </div>
            <div
              className={
                this.activeScreen === ScreenType.Fetched
                  ? 'tab-pane fade show active'
                  : 'tab-pane fade'
              }
              id="nav-fetched"
              role="tabpanel"
              aria-labelledby="nav-fetched-tab"
            >
              <TodoListView
                key="complete_list"
                todos={store ? fetchedItems : []}
                onChange={this.onChangeComplete}
                error={store.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoContainer;
