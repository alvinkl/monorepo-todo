import React from "react";
import { observer } from "mobx-react";

import { TodoContainerStore, LocalTodoService } from "@alvin/datasource";

import Todo from "../src/containers/Todo/Todo";

@observer
export default class IndexPage extends React.Component {
  store = new TodoContainerStore(new LocalTodoService());

  render() {
    return (
      <div>
        <h1>Welcome to next.js</h1>
        <Todo store={this.store} />
      </div>
    );
  }
}
