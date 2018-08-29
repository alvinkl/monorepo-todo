import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as React from 'react';

import * as style from './button.css';

interface IButton {
  /**
   * Text Description
   */
  text: string;
  /** Hello */
  disabled?: boolean;
}

export class Button extends React.Component<IButton, {}> {
  static defaultProps: Partial<IButton> = {
    text: 'Hello',
  };
  render() {
    return (
      <div>
        <button className={style.button} disabled={this.props.disabled}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default withStyles(style)(Button);
