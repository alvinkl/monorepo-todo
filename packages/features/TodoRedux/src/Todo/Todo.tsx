import * as React from 'react';

import TodoItem from './components/TodoItem';

interface ITodoProps {
  reduxIsAwesome: () => void;
}

export class Todo extends React.Component<ITodoProps, {}> {
  componentDidMount() {
    const { reduxIsAwesome } = this.props;

    reduxIsAwesome();
  }

  render() {
    return (
      <div>
        <h1>Is Redux still awesome??</h1>
        <ul>
          <TodoItem />
        </ul>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { reduxIsAwesome } from '../actions/todo';

const mapDispatchToProps = (dispatch) => ({
  reduxIsAwesome: () => dispatch(reduxIsAwesome()),
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);
