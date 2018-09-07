import * as React from 'react';
import { styleHelper } from '../../utils/styleHelper';

interface ICheckbox {
  /** on value change listener */
  onChange: any;
  itemKey: string;
  /** default value */
  defaultChecked?: boolean;
}

export class Checkbox extends React.Component<ICheckbox, any> {
  static defaultProps: Partial<ICheckbox> = {
    defaultChecked: false,
  };
  constructor(props: ICheckbox) {
    super(props);

    this.state = {
      checked: props.defaultChecked,
    };
  }

  onClick = (key: string) => {
    this.setState(
      {
        checked: !this.state.checked,
      },
      () => {
        this.props.onChange(key, this.state.checked);
      }
    );
  };

  render() {
    const key = this.props.itemKey;
    return (
      <div>
        <label className="containerCheckbox">
          {this.props.children}
          <input
            type="checkbox"
            defaultChecked={this.props.defaultChecked}
            onClick={this.onClick.bind(this, key)}
          />
          <span className="checkmarkCheckbox" />
        </label>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}

const styles = [require('./checkbox.css?raw')];

export default styleHelper(Checkbox, styles);
