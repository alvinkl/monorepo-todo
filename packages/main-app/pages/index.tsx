import React from "react";
import { observer } from "mobx-react";

import { TodoContainerStore, LocalTodoService } from "@alvin/datasource";

import Todo from "../src/containers/Todo/Todo";

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
        <Todo store={this.store} />
      </div>
    );
  }
}
