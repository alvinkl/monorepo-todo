import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import TodoItem from './components/TodoItem';
import { TodoStore } from './store/TodoStore';

interface ITodoProps {
  store?: TodoStore;
}

@inject('store')
@observer
export class Todo extends React.Component<ITodoProps, {}> {
  @observable
  store?: TodoStore = this.props.store;

  render() {
    return (
      <div>
        <h1>Mobx is awesome! I'm telling the truth *wink *wink</h1>
        <ul>
          <TodoItem />
        </ul>
      </div>
    );
  }
}

export default Todo;
