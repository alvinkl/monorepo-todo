import * as React from 'react';
import { styleHelper } from '../../utils/styleHelper';
// import ReactDropdown from 'react-toolbox/lib/dropdown'
// import Select from 'react-select'
import { Input } from '../Input/Input';
import { ItemList } from '../ItemList/ItemList';

interface IDropdown {
  /**  default value */
  value: string;

  /** on value change listener */
  onChange: any;
  /** list of option {label:string, value:string} */
  source: any[];
  /** input name */
  name: string;
}

export class Dropdown extends React.Component<IDropdown, any> {
  constructor(props: IDropdown) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.state = {
      value: props.value,
      error: false,
      displayList: false,
    };
  }

  componentWillMount() {
    this.setState({
      value: this.props.value,
    });
  }

  onChange(selectedOption: string) {
    this.setState({
      value: selectedOption,
    });
    // this.props.onChange(this.state.value)
  }

  onInputFocus() {
    this.setState({
      displayList: true,
    });
  }

  onInputBlur() {
    if (!this.state.mouseOver) {
      this.setState({
        displayList: false,
      });
    }
  }

  onItemClick(idx: number) {
    this.setState(
      {
        value: this.props.source[idx].title,
        displayList: false,
      },
      () => {
        this.props.onChange(this.state.value);
      }
    );
  }

  handleOnMouseOver() {
    this.setState({
      mouseOver: true,
    });
  }

  handleOnMouseOut() {
    this.setState({
      mouseOver: false,
    });
  }

  renderList() {
    return <ItemList source={this.props.source} onClick={this.onItemClick} />;
  }

  render() {
    return (
      <div
        style={{ position: 'relative' }}
        onMouseLeave={this.handleOnMouseOut}
        onMouseEnter={this.handleOnMouseOver}
      >
        <Input
          type="text"
          placeholder={''}
          name={this.props.name}
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          readonly={true}
        />
        <img
          className="dropdown--img"
          src="https://s3-ap-southeast-1.amazonaws.com/airy-assets/airy-thanos/calendar_dropdown.svg"
        />
        <div
          className="dropdown--itemContainer"
          style={{ display: this.state.displayList ? 'block' : 'none' }}
        >
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const styles = [require('./dropdown.css?raw')];

export default styleHelper(Dropdown, styles);
