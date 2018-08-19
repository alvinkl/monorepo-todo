import React from "react";
import { observer } from "mobx-react";

import { TodoContainerStore, LocalTodoService } from "@alvin/datasource";

import TodoPage from "../src/containers/TodoPage";

@observer
export default class IndexPage extends React.Component {
  store = new TodoContainerStore(new LocalTodoService());

  componentDidMount() {
    this.store.loadItems();

    window.onbeforeunload = () => this.beforeUnload();
  }

  beforeUnload() {
    this.store.saveItems();
  }

  render() {
    return (
      <div>
        <TodoPage store={this.store} />
      </div>
    );
  }
}
