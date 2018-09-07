import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Avatar, Text, TextBox } from '@organizations/ui';

import TodoListView from './components/TodoListView';
import { TodoContainerStore } from './store/TodoContainerStore';

enum ScreenType {
  Active,
  Completed,
}

interface IPropsStore {
  store?: TodoContainerStore;
}

@inject('store')
@observer
export class TodoContainer extends React.Component<IPropsStore, {}> {
  @observable
  activeScreen: ScreenType = ScreenType.Active;

  @observable
  store = this.props.store;

  componentDidMount() {
    this.store!.loadItems();
  }

  @action
  setActiveScreen = (activeScreen: number) => {
    this.activeScreen = activeScreen;
  };

  onChangeComplete = (id: number) => {
    this.store!.updateItem(id);
  };

  onSubmitNewTodo = (text: string) => {
    this.store!.addItem(text);
  };

  render() {
    const { activeItems, completedItems } = this.store!;

    return (
      <div className="container td-container">
        <Avatar name={['John sdoe']} petite={false} status="ACTIVE" />
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
