import { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import * as React from 'react'

enum ScreenType {
    Active,
    Completed,
}

// Mark: Imports for stores
import { ITodoContainerStore } from './interfaces/ITodoContainerStore';
// Mark: Interfaces
interface ITodoContainer {
    store?: ITodoContainerStore;
}

// Mark: Imports for own modules
// import TodoListView from './components/TodoListView';
// import { TextBox } from '@components/TextBox';
const TextBox = () => <h1>TextBox</h1>
const TodoListView = () => <h1>TodoListView</h1>

@observer
class TodoContainer extends Component<ITodoContainer, {}> {
    // Mark: Variables

    // @observable
    activeScreen: ScreenType = ScreenType.Active;

    // Mark: Lifecycles

    render() {
        return (
            <div className="container td-container">
                {/* <TextBox
                    onSubmit={value => {
                        this.props.store.addItem(new TodoListItemStore(value));
                    }}
                /> */}
                <TextBox></TextBox>

                <div>
                    <nav>
                        <div
                            className="nav nav-tabs nav-fill"
                            id="nav-tab"
                            role="tablist">
                            <a
                                className={
                                    this.activeScreen == ScreenType.Active
                                        ? 'nav-item nav-link active'
                                        : 'nav-item nav-link'
                                }
                                onClick={() => {
                                    this.activeScreen = ScreenType.Active;
                                }}
                                id="nav-active-tab"
                                data-toggle="tab"
                                href="#"
                                role="tab"
                                aria-controls="nav-active"
                                aria-selected="true">
                                Active
                            </a>
                            <a
                                className={
                                    this.activeScreen == ScreenType.Completed
                                        ? 'nav-item nav-link active'
                                        : 'nav-item nav-link'
                                }
                                onClick={() => {
                                    this.activeScreen = ScreenType.Completed;
                                }}
                                id="nav-completed-tab"
                                data-toggle="tab"
                                href="#"
                                role="tab"
                                aria-controls="nav-completed"
                                aria-selected="false">
                                Completed
                            </a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className={
                                this.activeScreen == ScreenType.Active
                                    ? 'tab-pane fade show active'
                                    : 'tab-pane fade'
                            }
                            id="nav-active"
                            role="tabpanel"
                            aria-labelledby="nav-active-tab">
                            <TodoListView
                                key="active_list"
                                // todos={
                                //     this.props.store
                                //         ? this.props.store.activeItems
                                //         : null
                                // }
                                // onChange={this.onChangeComplete}
                            />
                        </div>
                        <div
                            className={
                                this.activeScreen == ScreenType.Completed
                                    ? 'tab-pane fade show active'
                                    : 'tab-pane fade'
                            }
                            id="nav-completed"
                            role="tabpanel"
                            aria-labelledby="nav-completed-tab">
                            <TodoListView
                                key="complete_list"
                                // todos={
                                //     this.props.store
                                //         ? this.props.store.completedItems
                                //         : null
                                // }
                                // onChange={this.onChangeComplete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChangeComplete(todo) {
        todo.setCompleteness(!todo.isCompleted);
    }
}

export { TodoContainer };
