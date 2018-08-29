import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { services as S } from '@organizations/datasource/todo';
import { Text, TextBox } from '@organizations/ui';
import { TodoContainerStore } from './store/TodoContainerStore';

import TodoListView from './components/TodoListView';

enum ScreenType {
  Active,
  Completed,
}

interface IPropsStore {
  store?: TodoContainerStore;
}

@observer
export class TodoContainer extends React.Component<IPropsStore, {}> {
  @observable
  activeScreen: ScreenType = ScreenType.Active;

  @observable
  store =
    this.props.store ||
    new TodoContainerStore(new S.OnlineTodoService('todos'));

  componentDidMount() {
    this.store.loadItems();

    window.onbeforeunload = () => this.beforeUnload();
  }

  @action
  setActiveScreen = (activeScreen: number) => {
    this.activeScreen = activeScreen;
  };

  onChangeComplete = (id: number) => {
    this.store.updateItem(id);
  };

  onSubmitNewTodo = (text: string) => {
    this.store.addItem(text);
  };

  beforeUnload() {
    this.store.saveItems();
  }

  render() {
    const { activeItems, completedItems } = this.store;

    return (
      <div className="container td-container">
        <TextBox onSubmit={this.onSubmitNewTodo} />
        <Text />

        <div>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className={
                  this.activeScreen === ScreenType.Active
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
                  this.activeScreen === ScreenType.Completed
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
                todos={this.store ? activeItems : []}
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
                todos={this.store ? completedItems : []}
                onChange={this.onChangeComplete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoContainer;