import { Component } from 'react';
import { observer } from 'mobx-react';
import { TodoContainer } from '@todo/Todo'

import { TodoContainerStore } from '@todo/datasource/TodoContainerStore';
import { LocalTodoService } from '@todo/datasource/LocalTodoService';

@observer
export default class IndexPage extends Component {
    // Mark: Variables

    store = new TodoContainerStore(new LocalTodoService());

    // Mark: Lifecycles

    // componentDidMount() {
    //     this.store.loadItems();

    //     window.onbeforeunload = () => {
    //         this.beforeUnload();
    //     };
    // }

    // beforeUnload() {
    //     this.store.saveItems();
    // }

    render() {
        return <TodoContainer store={this.store} />;
    }
}
